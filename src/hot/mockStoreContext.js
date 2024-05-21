import React from "react";

// 第一步：船舰context
// 子组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值
const StoreContext = React.createContext({
  color: "color默认值",
  size: "size默认值",
});

export default StoreContext;
