import { useContext, useEffect, useState } from 'react';
import TitlePages from '../../Components/TitlePages';
import { Task } from '../../Types/Task';
import * as C from './styles';
import AddTask  from '../../Components/Tasks/AddTask'
import { AuthContext } from '../../Contexts/Auth';
import { format } from 'date-fns';
import axios from 'axios';
import ListTasks from '../../Components/Tasks/ListTasks';

const Tasks = () => {

    const { user } = useContext(AuthContext)
    const [list, setList] = useState<Task[]>([]);
    const [load, setLoad] = useState(false);

    const handleAdd = async (taskName: string) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const { data } = await axios.post("http://localhost:3333/api/create-task", {
            userID: user?._id,
            date: today,
            task: taskName
        })

        return data;
    }

    useEffect(() => {
            setInterval(() => {
                (async () => {
                    const { data } = await axios.get(`http://localhost:3333/api/find-all-tasks/${user?._id}`)
                    return setList(data);
                })()
            }, 100)
    }, [user?._id])

  return (
      <C.Container>
          <C.ContainerTop>
          <C.TitleAra>
            <TitlePages title="Tasks"/>
          </C.TitleAra>
          <C.ContentAddItem>
            <AddTask onEnter={handleAdd}/>
          </C.ContentAddItem>
          <div/>
          </C.ContainerTop>
          <C.ContentTasksArea>
              {list.map((item, index) => (
                  <ListTasks item={item} key={index}/>
              ))}
              {list.length  === 0 && <div className='contain'><h1>Tarefas em dia!</h1></div>}
          </C.ContentTasksArea>
      </C.Container>
  );
}

export default Tasks;