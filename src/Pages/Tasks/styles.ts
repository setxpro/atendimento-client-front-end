import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const TitleAra = styled.div`
 flex: 1;
`;
export const ContentAddItem = styled.div`
    flex: 2;
`;

export const ContainerTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom: 1px solid #5555;

    > div {
        flex: 1;
    }
`;
export const ContentTasksArea = styled.div`
    height: 450px;
    .contain {
        height: inherit !important;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            color: var(--color-text);
            font-size: 2.5em;
            font-weight: 500;
        }
    }
`;