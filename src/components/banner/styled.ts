import styled from "styled-components";

export const HomeBanner = styled.div`
  padding: 180px 0 316px;
  .banner-bg {
    background-image: url("/images/banner.jpg");
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }
  .banner-container {
    max-width: 1170px;
    margin: 0 auto;
    color: #fff;
  }
  .banner-content {
    color: #fff;
    text-align: center;
    .text-large {
      font-size: 80px;
      font-weight: 800;
      text-transform: uppercase;
      .movie {
        color: #31d7a9;
      }
    }
    .text-small {
      font-size: 28px;
      color: #dbe2fb;
    }
  }
`;
