import styled from 'styled-components';

import { AiFillBell } from 'react-icons/ai'
import { HiBars3BottomLeft } from 'react-icons/hi2'

export const Container = styled.div`
    height: 70px;
    background-color: var(--color-secondary);
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    user-select: none;

    position: relative;

    @media (max-width: 428px) {
        border-radius: 0;
    }
   
`;
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;
export const LeftSide = styled.div`
   display: flex;
   align-items: center;

`;
export const ContentNameAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    h4 {
        text-align: end;
        font-size: 1.3em;
        font-weight: 500;
        color: var(--color-text);
    }
    p {
        text-align: end;
        font-size: 1em;
        color: #666;
    }
`;
export const ContentAvatarName = styled.div`
   
`;
export const ContentBellIcon = styled.div`
   position: relative;
    height: 72px;

    display: flex;
    align-items: center;

    @media (max-width: 428px) {
        display: none;
    }
   
`;
export const PseudoElement = styled.div`

        ::after {
            content: '';
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--color-notify);

            position: absolute;
            top: 20px;
            right: 0;
        }
`;
export const ContentAvatar = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
`;

export const Avatar = styled.img`
   width: 60px;
   border-radius: 50%;
   border: 2px solid #FFF;
   padding: 3px;
`;

export const BellIcon = styled(AiFillBell)`
    color: var(--color-text);
    font-size: 1.7em;
    cursor: pointer;

`;
export const BarsIcon = styled(HiBars3BottomLeft)`
    color: var(--color-text);
    font-size: 2.2em;
    cursor: pointer;
`;

export const DropD = styled.div<{showDropdown: boolean}>`
    height: ${props => props.showDropdown ? '200px' : '0'};
    width: 260px;
    background: green;
    overflow: hidden;
    transition: all .5s ease;
    position: absolute;
    top: 70px;    

  
`;