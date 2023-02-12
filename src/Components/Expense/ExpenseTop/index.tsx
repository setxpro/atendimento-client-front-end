import React from 'react';
import { formatCurrentMonth } from '../../../Utils/formatDate';
import ResumeItem from '../ResumeItem';

import * as C from './styles'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    inCome: number;
    expense: number;
}

const ExpenseTop: React.FC<Props> = ({ currentMonth, onMonthChange, inCome, expense }) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1); // Única linha de diferença...
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

  return (
    <C.InfoArea>
    <C.ContainMonth>
        <C.LeftIcon onClick={handlePrevMonth}/>
        <C.MonthArea>{formatCurrentMonth(currentMonth)}</C.MonthArea>
        <C.RightIcon onClick={handleNextMonth}/>
    </C.ContainMonth>
    <ResumeItem
        title="Receitas" 
        value={inCome}
        color={'blue'}
    />
    <ResumeItem
        title="Despesas" 
        value={expense}
        color={'red'}
    />
    <ResumeItem
        title="Balanço"
        value={inCome - expense}
        color={(inCome - expense) < 0 ? 'red' : 'green'}
    />
  </C.InfoArea>
  );
}

export default ExpenseTop;