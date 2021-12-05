import styled from "styled-components";

export const BannerWrapper = styled.div`
  .banner {
    margin-top: 0.625rem;

    .c1 {
      height: 20rem;
      background-image: url(${require("assets/img/1~1.webp").default});
      background-size: cover;
      border-radius: 5%;
    }
    .c2 {
      height: 20rem;
      background-image: url(${require("assets/img/2~1.webp").default});
      background-size: cover;
      border-radius: 5%;
    }
    .c3 {
      height: 20rem;
      background-image: url(${require("assets/img/3~1.webp").default});
      background-size: cover;
      border-radius: 5%;
    }
  }
`;
