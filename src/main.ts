import { createApp } from "vue";
import App from "./App.vue";
import components from '@/common'
import { createPinia } from "pinia";
import { useStore } from "./store";

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)

components.map(component=>{
    app.component(component.name, component)
})

app.mount("#app");
