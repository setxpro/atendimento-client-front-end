import { useState, KeyboardEvent } from 'react';

import * as C from './styles';

type Props = {
   onEnter: (taskName: string) => void; 
}

const AddTask = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText); // Vai inserir
            setInputText(''); // Vai limpar
        }
    }
  return (
    <C.Container>
    <div className="image"><C.SymbolIcon/></div>
        <input 
            type="text" 
            name=""
            placeholder='Adicione uma tarefa...'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
        />
    </C.Container>
  );
}

export default AddTask;