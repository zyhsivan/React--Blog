import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "script/redux";
import { NavLink } from "react-router-dom";
import { aricleSlice, fetchOneTypeArticle } from "store/article/article_slice";
import { switchNumberToType } from "utils/switch_types";
import { List, Spin } from "antd";
import { SubclassWrapper } from "./style";

export default memo(function ZSubclass(props: any) {
  const { typeArticle } = useSelector((state) => state.arcticle, shallowEqual);
  const id = props.location.search.split("=")[1];
  const fromTypeData = switchNumberToType(+id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneTypeArticle(+id));
    return () => {
      dispatch(aricleSlice.actions.normalType([1]));
    };
  }, [dispatch, id]);
  return (
    <>
      {typeArticle[0] !== 1 ? (
        <SubclassWrapper>
          <List
            size="large"
            bordered
            header={<div>{fromTypeData}</div>}
            dataSource={typeArticle}
            renderItem={(item) => (
              <NavLink to={`/detail?id=${item.id}`}>
                <List.Item className="l-item">
                  <span>{item.title}</span>
                  {item.article_content}
                </List.Item>
              </NavLink>
            )}
          />
        </SubclassWrapper>
      ) : (
        <div className="loading">
          <Spin tip="Loading..." size="large" />
        </div>
      )}
    </>
  );
});
