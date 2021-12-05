import styled from "styled-components";

export const AuthorWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  padding: 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid #eee;
  div {
    margin-bottom: 1rem;
  }
  .img {
    height: 10rem;
    width: 10rem;
    background-image: url(${require("assets/img/5~1.webp").default});
    background-size: cover;
    background-position: 0.625rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .author-introduction {
    font-size: 0.8rem;
    color: #999;
    em {
      font-size: 1.875rem;
      font-family: "myFont1", "楷体";
    }
    .account {
      height: 2.25rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      svg {
        height: 2.1875rem;
        width: 2.375rem;
        margin-right: 0.625rem;
      }
    }
  }
`;
