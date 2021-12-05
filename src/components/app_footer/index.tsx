import React, { memo, useState } from "react";

import { Popover } from "antd";
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { FooterWrapper } from "./style";

export default memo(function ZAppFooter() {
  const [visibleQQ, setVisibleQQ] = useState(false);
  const [visibleWE, setVisibleWE] = useState(false);
  const handleQQ = () => {
    setVisibleQQ(!visibleQQ);
  };
  const handleWE = () => {
    setVisibleWE(!visibleWE);
  };
  return (
    <FooterWrapper>
      <div className="link">联 系 我</div>
      <div>
        <a href="https://github.com/zyhsivan" title="github" className="item">
          <GithubOutlined />
        </a>
        <Popover
          content={
            <img
              // src={require("@/assets/img/qq.jpg").default}
              alt="扫我加好友"
              className="call"
            />
          }
          title="QQ"
          trigger="click"
          visible={visibleQQ}
          onVisibleChange={handleQQ}
        >
          <span title="QQ" className="item">
            <QqOutlined />
          </span>
        </Popover>
        <Popover
          content={
            <img
              // src={require("../../assets/img/1.JPG").default}
              alt="扫我加好友"
              className="call"
            />
          }
          title="wechat"
          trigger="click"
          visible={visibleWE}
          onVisibleChange={handleWE}
        >
          <span title="wechat" className="item">
            <WechatOutlined />
          </span>
        </Popover>
      </div>
    </FooterWrapper>
  );
});
