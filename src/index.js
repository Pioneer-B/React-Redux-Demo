import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./store";
import store from "./rtkStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider>本质上也是使用content，只是内部又对其做了些包装
  // 所以store={store}本质上就是用value={store}来传递数据的
  <Provider store={store}>
    <App />
  </Provider>
);
