import styled from 'styled-components';

import { BsShieldLock } from 'react-icons/bs'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;

    h2 {
        color: var(--color-text);
        font-size: 2em;
        font-weight: 500;
    }
`;

export const Content = styled.div`
    height: 400px;
    width: 600px;
    background: var(--color-secondary);
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;


    border-radius: 8px;

    @media (max-width: 500px) {
        background: transparent;
        gap: 3rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            width: 245px;
            padding: .6rem 3px 2px 3px;
            border: 0;
            border-bottom: 2px solid var(--color-text);
            outline: none;
            font-size: 1.3em;
            background: transparent;
            color: var(--color-text);

            @media (max-width: 500px) {
                width: 350px;
                font-size: 2em;
            }
        }
    }
`;

export const ContentButon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`;

export const ButtonSend = styled.button`
    padding: 0.5rem 2.5rem;
    width: 245px;
    border-radius: 8px;
    border: none;
    background: cyan;

    transition: .5s;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 300px;
        font-size: 2em;
    }

    &:hover {
        opacity: .83;
    }
`;

export const LockIcon = styled(BsShieldLock)`
    color: var(--color-text);
    font-size: 3em;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
        font-size: 5em;
    }
`;