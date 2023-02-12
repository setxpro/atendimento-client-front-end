import styled from 'styled-components';

import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

export const RightIcon = styled(HiArrowCircleRight)`
    color: var(--color-text);
    font-size: 2em;
    cursor: pointer;
`;
export const LeftIcon = styled(HiArrowCircleLeft)`
    color: var(--color-text);
    font-size: 2em;
    cursor: pointer;
`;

export const InfoArea = styled.div`
    display: flex;
    align-items: center;
    flex: 2;
    
    > div {
        height: 50px;
        width: 25%;
    }
    `;
   
export const ContainMonth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`;
export const ItemInfo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    h3 {
        color: #555;
        font-size: 1.3em;
        font-weight: 500;
    }
`;
export const ValueArea = styled.h4`
    color: var(--color-text);
    font-size: 1.3em;
    font-weight: 500;
`;
export const MonthArea = styled.h4`
    color: var(--color-text);
    font-size: 1.3em;
    font-weight: 500;
`;