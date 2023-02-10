import styled from "styled-components";

export const AccountContainer = styled.div`
  background-image: url("/images/account-background.jpg");
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContainer = styled.main`
  // padding-top: 88px;

  @media (max-width: 768px) {
    // padding-top: 20px;
  }
`