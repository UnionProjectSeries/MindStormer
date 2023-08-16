import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import {router} from "./router"
import { DraggablePlugin } from '@braks/revue-draggable';

createApp(App).use(Antd).use(router).use(DraggablePlugin).mount('#app')
