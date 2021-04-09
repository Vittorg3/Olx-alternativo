import styled from 'styled-components';

export const Item = styled.div`
a {
    display: block;
    border: 1px solid white;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: white;
    transition: all ease .2s;

    &:hover {
        background-color: #EEE;
        border: 1px solid #CCC;
    }

    .itemImage img {
        width: 100%;
        border-radius: 5px;
    }

    .itemName {
        font-weight: bold;
    }
}
`;