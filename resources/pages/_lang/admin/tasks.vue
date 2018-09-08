<template>
  <v-layout>
    <v-dialog v-model="dialog" max-width="500px" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="info" @click="close">Отмена</v-btn>
            <v-btn flat color="success" @click="save">Сохранить</v-btn>
          </v-card-actions>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-layout wrap xs6>
                  <v-flex xs11 justify-center align-center>
                    <v-text-field box color="info" v-model="editedItem.title" label="Название" hint="Название должно быть уникальным и не должено быть пустым" :required="true"></v-text-field>
                  </v-flex>
                  <v-flex xs1 justify-center align-center>
                    <p>Отображать</p>
                    <v-switch v-model="editedItem.is_status" style="left: 10px;"></v-switch>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-autocomplete box color="info" :items="translates" v-model="editedItem.translate_id" item-value="id" item-text="title" label="Категория" autocomplete></v-autocomplete>
              </v-flex>
              <v-flex xs12 justify-center align-center>
                <v-text-field box color="info" v-model="editedItem.text" label="Текст" hint="Текст" :required="true"></v-text-field>
              </v-flex>
              <v-flex xs12 justify-center align-center>
                <v-text-field box color="info" v-model="editedItem.translate" label="Перевод" hint="Перевод" :required="true"></v-text-field>
              </v-flex>
              <!-- <v-flex xs12>
                <no-ssr>
                  <vue-editor v-model="editedItem.description"></vue-editor>
                </no-ssr>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h2 class="headline">Задания</h2>
          <v-btn icon @click="dialog = true" primary>

            <v-icon color="success" v-html="'fa-plus'"></v-icon>

          </v-btn>
          <v-btn icon @click="GetData()" primary>

            <v-icon color="info" v-html="'fa-sync'"></v-icon>

          </v-btn>
          <v-spacer/>
          <v-text-field box color="info" v-model="search" append-icon="search" label="Поиск" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :loading="progress" :rows-per-page-items='[10,25,50,100,{"text":"Все","value":-1}]' :search="search" no-results-text="Ничего не найдено" no-data-text="Ничего не найдено" rows-per-page-text="Количество строк на страницу" :headers="headers"
          :items="tasks" :pagination.sync="pagination" select-all item-key="name" class="elevation-1">
          <v-progress-linear v-if="progress" slot="progress" color="blue" indeterminate></v-progress-linear>
          <template slot="headers" slot-scope="props">
                          <tr>
                              <th v-for="header in props.headers" :key="header.text" :class="['column',  header.sortable ? 'sortable' : '', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="if(header.sortable) changeSort(header.value)">

                                  <v-icon v-if="header.sortable" small>arrow_upward</v-icon>

                                  {{ header.text }}
                              </th>
                          </tr>
</template>

<template slot="items" slot-scope="props">
  <tr>
    <td>#{{ props.item.id }}</td>
    <td>{{ props.item.title }}</td>
    <td style="position: relative;">
      <v-switch @change="changeStatus(props.item)" style="position: absolute; top:  8px; left: 45%;" v-model="props.item.is_status"></v-switch>
    </td>
    <td class="text-xs-center">
      <v-btn icon class="mx-0" @click="editItem(props.item)">

        <v-icon color="secondary">edit</v-icon>

      </v-btn>
      <v-btn icon class="mx-0" @click="deleteItem(props.item)">

        <v-icon color="pink">delete</v-icon>

      </v-btn>
    </td>
  </tr>
</template>
            </v-data-table>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
  export default {

    notifications: {
      Success: {
        type: "success",
        title: "Успешно"
      },
      Error: {
        type: "error",
        title: "Ошибка",
        text: "Не удалось выволнить запрос"
      }
    },
    data() {
      return {
        search: "",
        dialog: false,
        progress: false,
        pagination: {
          sortBy: "id"
        },
        editedIndex: -1,
        editedItem: {
          id: -1,
          title: "",
          user_id: 1,
          description: "",
          category_id: 1,
          text: "",
          translate: "",
          translate_id: 1,
          is_status: 1,
          created_at: "",
          updated_at: ""
        },
        defaultItem: {
          title: "",
          user_id: 1,
          description: "",
          category_id: 1,
          text: "",
          translate: "",
          translate_id: "",
          is_status: 1,
          created_at: "",
          updated_at: ""
        },
        headers: [{
            text: "ID",
            align: "left",
            sortable: true,
            value: "id"
          },
          {
            text: "Название",
            align: "center",
            sortable: true,
            value: "title"
          },
          {
            text: "Отображать",
            align: "center",
            sortable: true,
            value: "is_status"
          },
          {
            text: "Действие",
            align: "center",
            sortable: false
          }
        ],
        tasks: [],
        translates: []
      };
    },
    created() {
      this.GetData();
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "Создание" : "Редактирование";
      }
    },
    methods: {
      async changeStatus(item) {
        await this.$axios
          .$put("/tasks/" + item.id, {
            is_status: item.is_status
          })
          .then(({
            status
          }) => {
            if (status != 202) {
              this.tasks[this.editedIndex].is_status = false;
              this.Success();
            }
          })
          .catch(error => {
            this.tasks[this.editedIndex].is_status = false;
            this.Error();
          });
      },
      async GetData() {
        this.progress = true;
        let tasks = await this.$axios
          .$get("/tasks/all/")
          .then(res => {
            if (res.status == 200) return res.data;
          })
          .catch(error => {
            return;
          });

        let translates = await this.$axios
          .$get("/translates/all/")
          .then(res => {
            if (res.status == 200) return res.data;
          })
          .catch(error => {
            return;
          });

        this.tasks = tasks,
          this.translates = translates
        this.progress = false;
      },
      changeSort(column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending;
        } else {
          this.pagination.sortBy = column;
          this.pagination.descending = false;
        }
      },
      editItem(item) {
        this.editedIndex = this.tasks.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
      deleteItem(item) {
        console.log(item)
        confirm("Вы точно хотите удалить?") &&
          this.$axios
          .$delete("/tasks/" + item.id)
          .then(({
            status,
            data
          }) => {
            if (status == 202) {
              this.tasks.splice(this.tasks.indexOf(item), 1);
            }
          })
          .catch(error => {
            this.Error();
          });
      },
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      },
      save() {
        if (this.editedIndex > -1) {
          this.$axios
            .$put("/tasks/" + this.editedItem.id, this.editedItem)
            .then(res => {
              if (res.status == 202) {

                Object.assign(this.tasks[this.editedIndex], res.data);
                this.close();
              }
            })
            .catch(error => {
              this.Error();
            });
        } else {
          this.$axios
            .$post("/tasks/", this.editedItem)
            .then(res => {
              console.log(res);
              if (res.status == 201) {
                this.tasks.push(res.data);
                this.Success();
                this.close();
              }
            })
            .catch(error => {
              this.Error();
            });
        }
      }
    }
  };
</script>

<style lang="less">
  .cat-img {
    width: 80%;
    height: 150px;
    object-fit: contain;
    object-position: center;
  }
</style>
