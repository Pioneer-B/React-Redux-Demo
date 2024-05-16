const { CHANGE_NAME, CHANGE_COUNTER } = require("./constants.js");

const changeNameAction = (name) => ({ type: CHANGE_NAME, name });
const changeCounterAction = (counter) => ({ type: CHANGE_COUNTER, counter });

module.exports = {
  changeNameAction,
  changeCounterAction,
};
