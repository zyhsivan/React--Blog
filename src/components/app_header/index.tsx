import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AppHeaderWrapper } from "./style";

export default memo(function ZAppHeader() {
  return (
    <AppHeaderWrapper>
      <Row justify="center" align="middle">
        <Col xs={24} sm={23} md={18} lg={16} xl={8}>
          <NavLink className="header-logo" to="/home">
            Sivan
          </NavLink>
          <span className="header-txt">{`ψ(。。) /在写了，在写了.../`}</span>
        </Col>

        <Col className="memu-div" xs={0} sm={1} md={5} lg={7} xl={10}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <HomeOutlined />
              <NavLink to="/home">首页</NavLink>
            </Menu.Item>
            <Menu.Item key="project">
              <FundProjectionScreenOutlined />
              <NavLink to="/project">留言</NavLink>
            </Menu.Item>
            <Menu.Item key="classification">
              <ReadOutlined />
              <NavLink to="/classification">分类</NavLink>
            </Menu.Item>
            <Menu.Item key="about">
              <UserOutlined />
              <NavLink to="/about">关于</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </AppHeaderWrapper>
  );
});
