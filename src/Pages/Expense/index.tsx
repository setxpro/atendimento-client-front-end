import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ExpenseTop from '../../Components/Expense/ExpenseTop';
import InputArea from '../../Components/Expense/InputArea';
import TableItem from '../../Components/Expense/TableItem';
import TitlePages from '../../Components/TitlePages';
import { AuthContext } from '../../Contexts/Auth';
import { categories } from '../../Mock/Categories';
import { Item } from '../../Types/Item';
import {  getCurrentMonth } from '../../Utils/formatDate';
// import { filterListByMonth, getCurrentMonth } from '../../Utils/formatDate';

import * as C from './styles'

const Expense = () => {

  const { user } = useContext(AuthContext)

    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    // const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [inCome, setInCome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [list, setList] = useState<Item[]>([]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
      }

      useEffect(() => {
          (async() => {
            const { data } = await axios.get(`http://localhost:3333/api/find-all-expense/${user?._id}`)
            return setList(data)
           })()
      }, [user?._id])

      useEffect(() => {
          setInterval(() => {
            (async() => {
              const { data } = await axios.get(`http://localhost:3333/api/find-all-expense/${user?._id}`)
              return setList(data)
             })()
          }, 100)
            
      }, [])

    
      useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;
    
        for(let i in list) {
          if (categories[list[i].category].expense) {
            expenseCount += list[i].price;
          } else {
            incomeCount += list[i].price;
          }
        }
    
        setInCome(incomeCount);
        setExpense(expenseCount);
    
      }, [list]);

  return (
      <C.Container>
          <C.ContainerTop>
          <C.TitleAra>
            <TitlePages title="Expenses"/>
          </C.TitleAra>
            <ExpenseTop
                currentMonth={currentMonth}
                onMonthChange={handleMonthChange}
                inCome={inCome}
                expense={expense}
            />
          </C.ContainerTop>

          <C.Content>
               <InputArea/>
                <C.TableArea>
                {list.length === 0 ? <div className='contain'><h1>Adicione uma despesa!</h1></div> :  
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Categoria</th>
                                <th>Título</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                          <TableItem key={index} item={item}/>
                        ))}
                        </tbody>
                    </table>
                }
                </C.TableArea>
          </C.Content>
      </C.Container>
  );
}

export default Expense;