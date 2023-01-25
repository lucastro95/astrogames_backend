import styled from "styled-components";

export const SearchBarWrapper = styled.form`
width: 40%;
display: flex;
justify-content: center;

@media (max-width: 768px) {
        width: 80%;
    }

input {
    width: 80%;
    margin-right: .5rem;
    padding: .2rem .5rem;
    background-color: transparent;
    border: 2px solid #cf0281;
    color: #FFFFFF;

    &::placeholder {
        color: #FFFFFF;
    }

    &:focus {
        border: 2px solid #cf0281;
        outline: none;
    }

}
button {
    padding: .2rem .5rem;
    border: 2px solid #cf0281;
    background-color: #cf0281;
    color: #FFFFFF;
    transition: .2s all;

    :hover {
        background-color: #FFFFFF;
        color: #cf0281;
    }
}
`