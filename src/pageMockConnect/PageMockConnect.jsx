import React, { PureComponent } from "react";
import mockConnect from "../hot/mockConnect";
import { changeCounterAction } from "../store/actionCreators";

class PageMockConnect extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>pageMockConnect counter: {counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(changeCounterAction(num)),
});
export default mockConnect(
  mapStateToProps,
  mapDispatchToProps
)(PageMockConnect);
