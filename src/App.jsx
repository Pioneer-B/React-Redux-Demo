import React from "react";
import TestRedux1 from "./pageRedux/TestRedux1";
import TestRedux2 from "./pageRedux/TestRedux2";
import TestReactRedux1 from "./pageReactRedux/TestReactRedux1";
import TestReactRedux2 from "./pageReactRedux/TestReactRedux2";

class App extends React.Component {
  render() {
    return (
      <div>
        <TestRedux1 />
        <hr />
        <TestRedux2 />

        <hr />
        <TestReactRedux1 />
        <hr />
        <TestReactRedux2 />
      </div>
    );
  }
}

export default App;
