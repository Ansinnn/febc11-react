import App from "./src/pages/App.js";
import yong from "../yong.js";

    /*
          ┌───────── App ──────────┐
          │           │            │
        Header       Todo        Footer
                      │
                  ┌───┴────┐
            TodoInput   TodoList
                           │
                        TodoItem
    */

yong.createRoot(document.getElementById('root')).render(App);