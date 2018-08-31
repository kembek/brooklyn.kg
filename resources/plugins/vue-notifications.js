import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import swal from 'sweetalert2'
import '~/assets/sweetalert.min.css'

function toast ({title, text, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return swal({title, text, type, timer: 2500, showConfirmButton: false, })
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
