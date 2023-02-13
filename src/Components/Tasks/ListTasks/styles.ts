import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs'

type ContainerProps = {
    done: boolean;
}
export const Container = styled.div<ContainerProps>(({ done })=>(

    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    margin-top: 1rem;
    

    transition: .5s;

    &:hover {
        background-color: #5555;
    }
    input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
        cursor: pointer;
    }
    label {
        color: #eee;
        text-decoration: ${done ? 'line-through' : 'initial'};  
    }
`
));

export const ContentTask = styled.div`
    
    
    .task {
        span {
            font-size: 1em;  
        }
    }
    
   
`;
export const TrashIcon = styled(BsTrash)`
    font-size: 1.6em;
    color: var(--color-text);
    cursor: pointer;
`;

export const ContentArea = styled.div`
    display: flex;
    gap: 3px;
`;
export const InputArea = styled.div`
    display: flex;
    align-items: center;

`;
export const TrashArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 50px;

    .date {
        font-size: .8em; 
        color: #777;  
    }
`;