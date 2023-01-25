import styled from "styled-components";

export const CheckoutWrapper = styled.section`
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    background-color: #000;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 0;
    }
`