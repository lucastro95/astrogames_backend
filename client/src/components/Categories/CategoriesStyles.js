import styled from "styled-components";

export const CategoriesLayout = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 468px) {
    flex-wrap: wrap;
  }
`;

export const CategoryCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 468px) {
    width: 35%;
  }
  
  img {
    width: 100%;
    
    &:hover {
      filter: drop-shadow(0 0 2rem #cf0281);
      cursor: pointer;
    }
    
  }

  h3 {
    color: #cf0281;
  }
`;
