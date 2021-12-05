import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { articleType } from "common/article_type";
import { List } from "antd";
import { ClassificationWrapper } from "./style";

export default memo(function ZClassification() {
  return (
    <ClassificationWrapper>
      <List
        className="l-list"
        size="large"
        bordered
        header={<div>分类</div>}
        dataSource={articleType}
        renderItem={(item) => (
          <NavLink to={`/subclass?id=${item.id}`}>
            <List.Item className="l-item">{item.title}</List.Item>
          </NavLink>
        )}
      />
    </ClassificationWrapper>
  );
});
