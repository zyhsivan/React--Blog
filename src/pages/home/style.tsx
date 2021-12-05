import styled from "styled-components";

export const HomeWrapper = styled.div`
  .ant-list-header {
    color: #1890ff;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; //一共多少行
    display: -webkit-box;
    overflow: hidden;
  }
  .ant-list-item-meta-description {
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; //一共多少行
    display: -webkit-box;
    overflow: hidden;
  }
`;
