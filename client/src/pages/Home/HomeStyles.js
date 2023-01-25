import styled from "styled-components";

export const HomeWrapper = styled.section`
  padding-top: 100px;
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  padding: 3rem 5rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: url("https://res.cloudinary.com/duafuhu8k/image/upload/v1668786927/astrogames/bg_psfptl.jpg");
  background-size: cover;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column-reverse;
  }

  img {
    width: 50%;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
