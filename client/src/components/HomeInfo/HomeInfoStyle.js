import styled from "styled-components";

export const HomeInfoWrapper = styled.div`
  width: 40%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 200;

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    text-align: center;
    color: #fff;
    text-shadow: 0 0 0.8em #cf0281;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  p {
    text-align: center;
    color: #fff;
    margin-bottom: 2.5rem;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }

  a {
    padding: 0.8rem 2rem;
    text-decoration: none;
    background-color: #02b3ab;
    color: #fff;
  }
`;
