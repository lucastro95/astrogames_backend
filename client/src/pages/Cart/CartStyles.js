import styled from "styled-components";

export const CartWrapper = styled.section`
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: #000;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    
    h3 {
        font-size: 2rem;
        color: #FFF;
        text-shadow: 0 0 .8rem #cf0281, 0 0 .8rem #cf0281, 0 0 .8rem #cf0281;
        margin-bottom: .5rem;
    }

    .line {
        background-color: #FFF;
        height: .2rem;
        width: 30%;
        box-shadow: 0 0 .4rem .1rem #cf0281;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    .prices {
        width: 40%;
        margin-top: 3rem;
        padding: 3rem;
        background: rgba(20, 223, 223, 0.2);
        box-shadow: 0 0 .4rem .1rem #02b3ab;
        border-radius: 16px;
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            width: 100%;
        }
        
        p {
            color: #FFF;
            margin: .5rem;
        }

        button {
            margin-top: .5rem;
            padding: .3rem 1.5rem;
            align-self: center;
            background-color: #cf0281;
            color: #FFF;
            border: 2px solid #cf0281;
            text-decoration: none;
            transition: all .3s;

            :hover {
                background-color: #FFF;
                color: #cf0281;
                cursor: pointer;
            }

            :disabled {
                color: #D8D8D8;
                background-color: #B26594;
                border: 2px solid #B26594;
                cursor: not-allowed;
            }
        }
    }

    .cart-info {
        display: flex;
        align-items: flex-start;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`