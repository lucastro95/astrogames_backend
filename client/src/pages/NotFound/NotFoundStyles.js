import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000;

  img {
    width: 40%;
  }

  h2 {
    margin: 1rem;
    font-size: 2.5rem;
    text-align: center;
    color: #cf0281;
    text-shadow: 0 0 0.8em #cf0281;
  }

  p {
    color: #FFFFFF;
  }

  a {
    margin-top: .5rem;
    color: #cf0281;
  }
`;
