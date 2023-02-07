import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai'

export const Container = styled.div<{openSidebarSettings: boolean}>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: .8s all ease;
    width: ${props => props.openSidebarSettings ? '40%' : '0'};
    background-color: var(--color-sidebar);
    z-index: 999;
    overflow: hidden;

    @media (max-width: 428px) {
        width: ${props => props.openSidebarSettings ? '70%' : '0'};
    }
`;
export const ContentBlur = styled.div<{openSidebarSettings: boolean}>`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    cursor: pointer;
    display: ${props => props.openSidebarSettings ? 'inline' : 'none'};
`;


export const CloseIcon = styled(AiOutlineClose)`
    color: var(--color-text);
    font-size: 2em;
    cursor: pointer;
`;

export const SettingsTop = styled.div`
    height: 80px;
    border-bottom: 1px solid #5555;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    h2 {
        color: var(--color-text);
        font-size: 2em;
        font-weight: 500;
    }

`;