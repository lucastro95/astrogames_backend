import styled from "styled-components";

export const LoginWrapper = styled.div`
    margin: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: url("https://res.cloudinary.com/duafuhu8k/image/upload/v1668786918/astrogames/login-bg_obw0hd.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 110vh;
    }
`