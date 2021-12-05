import React, { memo } from "react";
import { Col, Row } from "antd";
import ZAside from "components/app_aside";
import { MainSlotWrapper } from "./style";

export default memo(function ZMainSlot({ children }) {
  return (
    <MainSlotWrapper>
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {children}
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <ZAside />
        </Col>
      </Row>
    </MainSlotWrapper>
  );
});
