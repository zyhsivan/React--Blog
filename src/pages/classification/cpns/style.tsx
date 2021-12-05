import styled from "styled-components";

export const SubclassWrapper = styled.div`
  background-color: rgba(255, 252, 252);
  text-align: center;
  .l-item {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      margin-right: 50px;
      float: left;
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .ant-list-item {
    display: block;
  }
  li:hover {
    background-color: rgba(52, 152, 219, 0.3);
  }
`;
