import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { changeRecommendAction } from "../store/actionCreators";
import { getRecommendsAction } from "../store/actionCreators";

export class TestReactRedux2 extends PureComponent {
  componentDidMount() {
    // const args = ["数据1", "数据2", "数据3", "数据4"];
    // axios.post("http://httpbin.org/post", args).then(({ data }) => {
    //   const result = JSON.parse(data.data);
    //   this.props.changeRecommends(result);
    // });

    // 异步数据应该放到redux中，下面是改进后的做法：
    this.props.getCommendsList();
  }
  render() {
    return (
      <div>
        <h2>
          TestReactRedux2
          请求推荐模拟数据,保存到store，TestReactRedux1使用了模拟数据
        </h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //   changeRecommends: (recommends) => dispatch(changeRecommendAction(recommends)),
  getCommendsList: () => dispatch(getRecommendsAction()),
});
export default connect(null, mapDispatchToProps)(TestReactRedux2);
