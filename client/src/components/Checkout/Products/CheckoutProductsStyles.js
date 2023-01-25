import styled from "styled-components";

export const ProductsWrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;

    @media (max-width: 768px){
        width: 80%;
        margin-top: 2rem;
    }
`

export const PricesWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;

    div {
        width: 100%;
        height: .2rem;
        margin: .5rem 0;
        background-color: #cf0281;
    }
`

export const ItemCard = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }

    img {
        width: 10%;
    }

    h4 {
        color: #FFF;
    }

    div {
        width: 10%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            width: 30%;
        }

    }
    p {
        color: #FFF;
    }
`