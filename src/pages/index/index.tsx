import {View} from "@tarojs/components";
import {connect} from "react-redux";
import {FC} from "react";

const Index: FC<any> = (props) => {
  console.log(props)
  const clickHandle = () => {
    props.dispatch({
      type: 'index/setCount',
      payload: {
        count: props.count + 1
      }
    })
  }
  return (
    <View onClick={clickHandle}>{props.count}</View>
  )
}
const mapStateToProps = (state: any) => {
  return {
    effects: state.effects,
    count: state.index.count
  }
}
export default connect(mapStateToProps)(Index);
