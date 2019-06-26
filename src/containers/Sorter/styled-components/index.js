import styled from "styled-components";

export const StyledSorter = styled.div`
  background: radial-gradient(
    circle,
    rgba(255, 247, 161, 1) 0%,
    rgba(245, 232, 129, 1) 91%
  );

  width: 450px;
  margin: 0 auto;
  padding: 20px 0 40px;

  h1 {
    margin-bottom: 40px;
    color: #a5663e;
    font-size: 45px;

    font-family: "Monoton", cursive;

    span {
      font-size: 24px;
      text-transform: lowercase;
    }
  }

  p {
    width: 325px;
    margin: 0 auto;
    font-size: 14px;
    margin-bottom: 40px;
  }

  div {
    margin-bottom: 10px;

    :last-of-type {
      margin-left: 10px;
      margin-top: 55px;
    }
  }
`;
