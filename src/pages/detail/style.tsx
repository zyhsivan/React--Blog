import styled from "styled-components";

export const DetailWrapper = styled.div`
  .title-anchor {
    color: #888;
    padding: 4px;
    margin: 0rem;
    height: auto;
    line-height: 1.2rem;
    font-size: 0.9rem;
    border-bottom: 1px dashed #eee;
  }

  .bread-nav {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background-color: #e1f0ff;
    height: 2.5rem;
  }
  .content {
    .detailed-title {
      font-size: 1.8rem;
      text-align: center;
      padding: 1rem;
      height: 6.25rem;
    }
    .center {
      text-align: center;
    }
    .detailed-content {
      padding: 1.3rem;
      font-size: 1rem;
    }

    .list-icon {
      span {
        width: 12.5rem;
        height: 22px;
      }
    }
  }
  .article-menu {
    display: none;
  }
`;
