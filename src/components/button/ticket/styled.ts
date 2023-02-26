import styled from "styled-components";

export const StyledTicketButton = styled.div`
  color: #fff;
  padding: 5px;
  width: 120px;
  margin: 5px 5px 5px 0;
  position: relative;
  background: #162f5f;
  text-align: center;
  -webkit-mask-image: url("/images/movie-ticket.png");
  mask-image: url("/images/movie-ticket.png");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #31d7a9;
    .end-time {
      color: #fff;
    }
  }
  .start-time {
    font-size: 17px;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  .end-time {
    color: #9aace5;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  @media (max-width: 480px) {
    width: 90px;
  }
`;
