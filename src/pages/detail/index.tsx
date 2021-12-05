import React, { memo, useEffect, useMemo } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "script/redux";
import { NavLink } from "react-router-dom";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { aricleSlice, fetchOneAricle } from "store/article/article_slice";
import { switchNumberToType } from "utils/switch_types";
import { Breadcrumb, Spin } from "antd";
import { CalendarOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { DetailWrapper } from "./style";

export default memo(function ZDetail(props: any) {
  const { onaArticle } = useSelector((state) => state.arcticle, shallowEqual);
  const fromTypeData = switchNumberToType(onaArticle?.type_id);
  console.log(onaArticle);
  useMemo(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true, // 启动类似Github样式的Markdown,
      pedantic: false, // 只解析符合Markdown定义的，不修正Markdown的错误
      sanitize: false, // 原始输出，忽略HTML标签
      breaks: false, // 支持Github换行符，必须打开gfm选项
      smartLists: true, // 优化列表输出
      smartypants: false,
      highlight: function (code: string) {
        return hljs.highlightAuto(code).value;
      },
    });
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    //?id=70
    const id = props.location.search.split("=")[1];
    dispatch(fetchOneAricle(id));
    return () => {
      dispatch(aricleSlice.actions.normalData({}));
    };
  }, [dispatch, props.location.search]);
  const data = marked.parse(onaArticle.article_content || "");
  return (
    <>
      {onaArticle.id ? (
        <DetailWrapper>
          <div className="bread-nav">
            <Breadcrumb>
              <Breadcrumb.Item>
                <NavLink to="/home">首页</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/classification">分类</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{onaArticle.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="content">
            <div className="detailed-title">{onaArticle.title}</div>

            <div className="list-icon center">
              <span className="addTime">
                <CalendarOutlined />
                {onaArticle.addTime}
              </span>
              <span>
                <FolderOpenOutlined />
                {fromTypeData}
              </span>
              {/* <span>
                <FireOutlined /> 不知道多少人,随便写个100
              </span> */}
            </div>

            <div className="detailed-content">
              <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
          </div>
        </DetailWrapper>
      ) : (
        <div className="loading">
          <Spin tip="Loading..." size="large" />
        </div>
      )}
    </>
  );
});
