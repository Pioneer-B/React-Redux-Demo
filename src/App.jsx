import React from "react";
import TestRedux1 from "./pageRedux/TestRedux1";
import TestRedux2 from "./pageRedux/TestRedux2";
import TestReactRedux1 from "./pageReactRedux/TestReactRedux1";
import TestReactRedux2 from "./pageReactRedux/TestReactRedux2";
import PageRtk1 from "./pageRtk/PageRtk1";
import PageRtk2 from "./pageRtk/pageRtk2";
import PageMockConnect from "./pageMockConnect/PageMockConnect";
import PageRtk3 from "./pageRtk/PageRtk3";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <TestRedux1 />
        <hr />
        <TestRedux2 />

        <hr />
        <TestReactRedux1 />
        <hr />
        <TestReactRedux2 /> */}

        <PageRtk1 />
        <hr />
        <PageRtk2 />
        <hr />
        <PageRtk3 />
        <hr />
        <PageMockConnect />
      </div>
    );
  }
}

export default App;
