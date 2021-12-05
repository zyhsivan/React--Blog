import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  .wechat {
    height: 400px;
    width: 300px;
    background-size: contain;
    background-position: 0.625rem;
    background-image: url(${require("../../assets/img/1.JPG").default});
  }
  .qq {
    line-height: 400px;
  }
`;
