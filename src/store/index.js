// const { createStore } = require("redux");
import { createStore } from "redux";
const { reducer } = require("./reducer.js");

const store = createStore(reducer);

// module.exports = {
//   store,
// };
export default store;
