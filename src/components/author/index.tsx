import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import { AuthorWrapper } from "./style";

export default memo(function ZAuthor() {
  return (
    <AuthorWrapper>
      <div className="img"></div>
      <div className="author-introduction">
        <em>
          Sivan <br />
        </em>
        <Divider>社交账号</Divider>
        <div className="account">
          <a href="https://github.com/zyhsivan" title="github" className="item">
            <GithubOutlined />
          </a>
          <NavLink to={`/about`}>
            <QqOutlined />
            <WechatOutlined />
          </NavLink>
        </div>
      </div>
    </AuthorWrapper>
  );
});
