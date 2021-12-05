import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "script/redux";
import { NavLink } from "react-router-dom";
import { fetchAllAricle } from "store/article/article_slice";
import { List } from "antd";
import { HomeWrapper } from "./style";

export default memo(function ZHome() {
  const { listData } = useSelector((state) => state.arcticle, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAricle());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <List
        header={<div>最新博客</div>}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={
                <NavLink to={`/detail?id=${item.id}`}>{item.introduce}</NavLink>
              }
              description={item.article_content}
            />
            {item.content}
          </List.Item>
        )}
      />
    </HomeWrapper>
  );
});
