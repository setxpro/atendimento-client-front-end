import styled from 'styled-components';

export const Container = styled.div`

`;

export const ContainerTop = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #5555;
`;
export const TitleAra = styled.div`
flex: 1;
`;


export const Content = styled.div`
`;
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

export const TableArea = styled.div`
    background: var(--color-secondary);
    max-height: 350px;
    padding: 0 10px 10px 10px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: #4444;
    }
    ::-webkit-scrollbar-thumb {
        background: #666;
    }

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

    table {
        width: 100%;

        thead {

           tr {
               position: relative;
                th {
                    position: sticky;
                    top: 0;
                    padding: 0.3rem;
                    background: #566;
                    font-size: 1.1em;
                    color: var(--color-text);
                    font-weight: 500;

                    z-index: 99;
                }
           }
        }

        tbody {

            tr {

                td {
                    padding: 0.3rem;
                    font-size: 1em;
                    color: var(--color-text);
                    font-weight: 500;
                    text-align: center;
                }

                :nth-child(even) {
                    background: #555;
                }
            }
        }
    }
`;