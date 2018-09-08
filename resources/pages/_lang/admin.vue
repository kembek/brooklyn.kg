<template>
<v-app dark>
  <div @mouseover="mini = false" @mouseleave="mini = true" >
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute stateless hide-overlay clipped fixed app disable-route-watcher>
        <v-list class="pa-1">
            <v-list-tile avatar tag="div">
                <v-list-tile-avatar>
                        <v-icon>fa-user</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{`${user.surname} ${user.first_name} ${user.middle_name}`}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="(item, i) in items" :key="i" router :to="item.to">
                <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer></div>
    <v-content>
        <v-container>
            <nuxt-child />
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    middleware: 'authenticated',
    layout: "none",
    data() {
        return {
            clipped: true,
            drawer: true,
            mini: true,
            right: null,
            items: [{
                    icon: 'fa-home',
                    title: 'Главная',
                    to: `/${this.$route.params.lang}/admin/`
                },
                {
                    icon: 'fa-tasks',
                    title: 'Задания',
                    to: `/${this.$route.params.lang}/admin/tasks/`
                },
                // {
                //     icon: 'fa-bars',
                //     title: 'Меню',
                //     to: '/menu/'
                // },
                // {
                //     icon: 'fa-images',
                //     title: 'Слайдер',
                //     to: '/slider/'
                // },
                // {
                //     icon: 'fa-folder-open',
                //     title: 'Категории',
                //     to: '/categories/'
                // },
                // {
                //     icon: 'fa-tags',
                //     title: 'Товары',
                //     to: '/products/'
                // },
                // {
                //     icon: 'fa-adjust',
                //     title: 'Цвета',
                //     to: '/colors/'
                // },
                // {
                //     icon: 'fa-align-left',
                //     title: 'Характеристики',
                //     to: '/attributes/'
                // },
                // {
                //     icon: 'fa-newspaper',
                //     title: 'Блог',
                //     to: '/blog/'
                // },
                // {
                //     icon: 'fa-comments',
                //     title: 'Отзывы',
                //     to: '/review/'
                // },
                // {
                //     icon: 'fa-users',
                //     title: 'Пользователи',
                //     to: '/users/'
                // },
                // {
                //     icon: 'fa-cogs',
                //     title: 'Настройки',
                //     to: '/settings/'
                // },
                {
                    icon: 'fa-sign-out-alt',
                    title: 'Выход',
                    to: '/exit/'
                }
            ],
            // miniVariant: false,
            title: 'BROOKLYN.KG'
        }
    },
    computed: {
        user() {
            return this.$store.getters['User/Get']
        }
    }
}
</script>

<style lang="less">
.icon--selection-control {
    margin-top: -1.6px;
}

.flex-column-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.align {
    .checkbox {
        margin: 18px 0 0 13px;
    }
}

.sbh2 {
    margin-top: 8px;
}

.sbh1 {
    margin-top: 0;
    margin-left: 18px;
}

.c1 {
    margin-left: 16px;
}

.ql-toolbar {
    .ql-picker-label {
        color: white !important;
    }
    * {
        fill: transparent !important;
        stroke: white !important;
    }
}

.quillWrapper {
    max-height: 95vh;
    .ql-editor {
        overflow-y: scroll;
        height: 90vh;
    }
.ql-video {
  width: 100%;
  height: 70%;
}
}
.cat-img {
  width: 80%;
  height: 150px;
  object-fit: contain;
  object-position: center;
}

.img-products {
  content: " ";
  height: 60px;
  width: 80px;
  margin: 5px;
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
}

.slider-img {
  width: 100%;
  max-height: 50vh;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
}

.img-slide {
  content: " ";
  height: 250px;
  width: 100%;
  margin: 5px;
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
}
.w100 {
  width: 100%;
}

h1,h2,h3,h4,h5,h6 {
  margin-bottom: 5px;
}

/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  transition: background-color 5000s ease-in-out 0s;
}
</style>

