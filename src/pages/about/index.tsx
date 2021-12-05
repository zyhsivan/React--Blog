import React, { memo } from "react";
import { AboutWrapper } from "./style";
export default memo(function ZAbout() {
  return (
    <AboutWrapper>
      <div className="wechat"></div>
      <div className="qq">请手动添加QQ：919828768</div>
    </AboutWrapper>
  );
});
