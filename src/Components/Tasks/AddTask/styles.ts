import styled from 'styled-components';

import { RiGradienterLine } from 'react-icons/ri'

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    .image {
        margin-right: 5px;
    }
    input {
        width: 100%;
        border: 0;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 1rem;
        flex: 1;
    }
`;

export const SymbolIcon = styled(RiGradienterLine)`
    color: var(--color-text);
    font-size: 1rem;
`;