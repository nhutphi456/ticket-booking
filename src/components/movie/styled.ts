import styled from "styled-components";

export const MovieList = styled.div`
  padding: 120px 0px;
  position: relative;
  .slick-slide {
    > div {
      padding: 0 20px;
    }
  }
  .arrow {
    cursor: pointer;
    z-index: 9;
    span {
      font-size: 50px;
      color: grey;
      transition: all 0.2s;
      &:hover {
        color: #fff;
      }
    }
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
  }
  .slick-dots-bottom {
    bottom: -30px;
  }

  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;
export const MovieItem = styled.div`
  border-radius: 7px 7px 5px 5px;
  overflow: hidden;
  .movie-thumb {
    overflow: hidden;
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.091));
      opacity: 0;
      transition: all 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      .icon-container {
        height: 50px;
        width: 50px;
        .play-icon {
          cursor: pointer;
          font-size: 50px;
          color: grey;
        }
      }
    }
    img {
      width: 100%;
      transition: all 0.5s;
    }
    &:hover {
      .overlay {
        opacity: 1;
      }
      img {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .movie-content {
    padding: 0 20px;
    background-color: #032055;
    h5 {
      font-size: 18px;
      padding: 23px 0;
      text-transform: capitalize;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-bottom: 1px dashed #11326f;
      a {
        color: #fff;
        &:hover {
          color: #31d7a9;
        }
      }
    }
    .ratings {
      padding: 17px 0;
      display: flex;
      align-items: center;
      .rating-item {
        display: flex;
        align-items: center;
        &:first-child {
          padding-right: 20px;
        }
        span {
          padding-left: 10px;
          line-height: 1;
          font-weight: 600;
          color: #fff;
        }
      }

      @media (max-width: 768px) {
        padding: 10px 0;
        .rating-item {
          font-size: 12px;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 0 10px;
      h5 {
        padding: 10px 0;
        font-size: 12px;
      }
    }
  }
`;

export const MovieThumb = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  padding-top: 147.9%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.5s;
`;
