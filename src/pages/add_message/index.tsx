import React, { memo, useEffect } from "react";
import { Empty } from "antd";
import { AddMesageWrapper } from "./style";
export default memo(function ZAddMesage() {
  useEffect(() => {
    setTimeout(() => {
      alert("等服务器做好,再展示功能");
    }, 0);
  }, []);
  return (
    <AddMesageWrapper>
      <Empty />
      <div className="message">{"等服务器做好,再展示功能"}</div>
    </AddMesageWrapper>
  );
});
