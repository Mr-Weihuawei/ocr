import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由配置文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 创建 Vue 应用程序实例
const app = createApp(App);

// 使用路由
app.use(router);
app.use(ElementPlus);

// 挂载应用程序
app.mount("#app");
