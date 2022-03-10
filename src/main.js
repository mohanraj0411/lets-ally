import { app } from './plugins/main-app'
import router from "./router";
import './plugins/global-components'

app.use(router).mount("#app");
