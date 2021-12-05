import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  background-color: #fff;
  padding: 0.4rem;
  overflow: hidden;
  height: 5rem;
  border-bottom: 1px solid #eee;
  line-height: 5rem;
  .ant-menu-overflow {
    justify-content: space-between;
  }
  .header-logo {
    display: inline-block;
    color: black;
    font-size: 1.8rem;
    text-align: left;
    font-family: "myFont1";
    transform: rotate(6deg);
  }
  .header-txt {
    font-size: 1rem;
    color: #999;
    display: inline-block;
    padding-left: 1.5rem;
  }

  .ant-menu-item {
    font-size: 1.2rem !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  svg {
    margin-right: 0.5rem;
    height: 20px;
    width: 20px;
  }
`;
