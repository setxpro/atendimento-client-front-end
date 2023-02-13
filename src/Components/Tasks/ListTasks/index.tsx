import { useState } from 'react';
import { Task } from '../../../Types/Task';
import { format } from 'date-fns';

import * as C from './styles';
import axios from 'axios';

interface Props {
    item: Task;
}

const ListTasks = ( { item } : Props) => {

    const [isChecked, setIsChecked] = useState(item.isCompleted);

    const handleDeleteTask = async (id: string) => {
      const { data } = await axios.delete(`http://localhost:3333/api/delete-task/${id}`)
      return data;
    }

  return (
    <C.Container done={isChecked}>

        <C.ContentArea>
          <C.InputArea>
            <input
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
          </C.InputArea>
          <C.ContentTask>
              <label className='task'><span>{item.task}</span></label>
          </C.ContentTask>
        </C.ContentArea>

        <C.TrashArea>
          <button onClick={() => handleDeleteTask(item._id)}>del</button>
              <span className='date'>{`${format(new Date(item.date), 'dd/MM')}`}</span>
        </C.TrashArea>
    </C.Container>      
  )
}

export default ListTasks;