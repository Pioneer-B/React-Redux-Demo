import React from "react";
import TestRedux1 from "./pageRedux/TestRedux1";
import TestRedux2 from "./pageRedux/TestRedux2";

class App extends React.Component {
  render() {
    return (
      <div>
        <TestRedux1 />
        <hr />
        <TestRedux2 />
      </div>
    );
  }
}

export default App;
