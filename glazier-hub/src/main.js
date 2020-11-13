import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore({
    state () {
      return {
        showContactForm: false
      }
    }
  })
  
const app = createApp(App)

const options = {
        transition: "Vue-Toastification__fade",
};

app.use(Toast, options)
app.use(store)
app.mount('#app')

