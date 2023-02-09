import styled from "styled-components";

export const MovieDetailThumb = styled.div`
  .detail-banner-wrapper {
    position: relative;
    .detail-banner-content {
      margin-left: 25%;
    }
  }
  .movie-name {
    font-size: 36px;
    margin-bottom: 5px;
  }
  .tags {
    margin-bottom: 21px;
    a {
      text-decoration: none;
      font-size: 14px;
      color: #9aace5;
      text-transform: uppercase;
      &::after {
        content: " , ";
      }
      &:last-child::after {
        content: "";
      }
    }
  }
  .categories {
    margin-bottom: 13px;
    a {
      display: inline-block;
      border: 1px solid rgba(163, 177, 198, 0.2);
      font-size: 13px;
      color: #9aace5;
      text-transform: uppercase;
      padding: 3px 17px;
      border-radius: 18px;
      transition: all ease 0.3s;
      text-decoration: none;
      line-height: 28px;
      &:last-child {
        margin-left: 5px;
      }
      &:hover {
        box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
      }
    }
  }
  .duration {
    display: flex;
    margin: -5px -10px 0;
    line-height: 28px;
    .item {
      font-size: 14px;
      margin: 5px 10px;
      color: #9aace5;
      .icon {
        margin-right: 5px;
      }
    }
  }
`;
export const MovieBackground = styled.div<{ bgUrl: string }>`
  width: 100%;
  padding-top: 235px;
  padding-bottom: 20px;
  position: relative;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 3;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 18, 50, 0.134891) 0%,
      #001232 90%
    );
    background-color: #000;
    opacity: 0.9;
  }
`;

export const MoviePoster = styled.div<{ bgUrl: string }>`
  width: 252px;
  padding-top: 32%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #17305f;
  overflow: hidden;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 18, 50, 0.4);
  }
`;

export const BookSection = styled.div`
  position: relative;
  padding: 47px 0;
  border-top: 1px solid #17305f;
  border-bottom: 1px solid #17305f;
  background-color: #032055;
  z-index: 2;
  .booking-wrapper {
    margin-left: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-side {
    display: flex;
    .item {
      margin: 10px 15px;
      text-align: center;
      .item-header {
        display: flex;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
        text-align: center;
        .thumb {
          width: 30px;
          margin-right: 5px;
        }
        .counter {
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
  .book-btn {
    line-height: 28px;
    padding: 10px 49px;
    height: auto;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
