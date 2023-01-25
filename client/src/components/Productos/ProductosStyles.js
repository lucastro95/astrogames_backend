import styled from "styled-components";

export const ProductosLayout = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;

`

export const ProductoCard = styled.div`
    width: 30%;
    height: auto;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cf028180;

    @media (max-width: 768px) {
        width: 80%;
    }

    img {
        width: 90%;
    }

    div {
        width: 100%;
        padding: .5rem;
        background-color: #02b3ab;
        color: #FFF;
    }

    button {
        width: 100%;
        padding: .3rem .5rem;
        background-color: #FFF;
        color: #cf0281;
        border: none;
        transition: all .3s;

        &:hover {
            background-color: #cf0281;
            color: #FFF;
            cursor: pointer;
        }
    }
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        padding: .2rem .5rem;
        margin: 3rem;
        background-color: #02b3ab;
        border: 2px solid #02b3ab;
        color: #FFFFFF;
        transition: all .2s;

        :hover {
            background-color: #FFFFFF;
            color: #02b3ab;
            cursor: pointer;
        }

        :disabled {
            background-color: #679C9A;
            border: 2px solid #679C9A;
            color: #D8D8D8;
            cursor: default;
        }
    }
`