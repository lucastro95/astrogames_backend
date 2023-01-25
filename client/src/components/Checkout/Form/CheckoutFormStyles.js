import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }

  h3 {
    font-size: 1.5rem;
    color: #cf0281;
    margin-bottom: 3rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 1rem;
      padding: 0.5rem 0.3rem;
      background-color: transparent;
      border: 2px solid #cf0281;
      box-shadow: 0 0 0.5rem 0 #cf0281;
      color: #fff;
    }

    button {
      width: 20%;
      height: 3rem;
      margin: 1rem 0;
      background-color: #cf0281;
      color: #ffffff;
      border: none;

      @media (max-width: 768px) {
        width: 50%;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 0.5rem 0 #cf0281;
      }

      :disabled {
        box-shadow: none;
        color: #d8d8d8;
        background-color: #b26594;
        border: 2px solid #b26594;
        cursor: not-allowed;
      }
    }
  }
`;
