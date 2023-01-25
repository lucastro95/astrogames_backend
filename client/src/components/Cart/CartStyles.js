import styled from "styled-components";

export const CartWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-right: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: .5rem;
    }

    h4 {
        color: #FFF;
    }

    a {
        background-color: #cf0281;
        color: #FFF;
        text-decoration: none;
        margin-top: 2rem;
        padding: .5rem 1rem;
        transition: all .2s;

        :hover {
            background-color: #FFF;
            color: #cf0281;
        }
    }
`

export const CartCard = styled.div`
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

        @media (max-width: 768px) {
            display: none;
        }
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

        button {
            width: 1.5rem;
            height: 1.5rem;
            background-color: #02b3ab;
            border-radius: 50%;
            border: none;
            transition: all .3s;
            color: #FFF;
            font-weight: 600;

            :hover {
                box-shadow: 0 0 .4rem .1rem #02b3ab;
                cursor: pointer;
            }
        }

    }
    p {
        color: #FFF;
    }
`