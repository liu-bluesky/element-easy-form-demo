import { createApp } from 'vue'

//表单设计器
import elementEasyForm from 'element-easy-form'
import 'element-easy-form/dist/style.css'
//element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//vue3.0 
import App from './App.vue'
const app = createApp(App);
app.use(elementEasyForm)
app.use(ElementPlus)
app.mount('#app')
