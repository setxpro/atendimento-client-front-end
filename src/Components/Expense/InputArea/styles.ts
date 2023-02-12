import styled from 'styled-components';


export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #5555;
`;

export const InsertItemArea = styled.div`
    width: 100%;

    height: 80px;

    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 1.3em;
        color: var(--color-text);
        font-weight: 500;
    }

    input, select {
        width: 100%;
        padding: 0.5rem;
        font-size: 1.3em;
        outline: none;
        border: none;
        border-radius: 8px;
    }
`;

export const AddArea = styled.div`
    padding: 0 1rem;
    height: 100%;

    display: flex;
    align-items: flex-end;
    padding: 15px 1rem;
    button {
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 8px;
    }
`;
