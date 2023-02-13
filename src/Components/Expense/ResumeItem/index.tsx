import React from 'react';

import * as C from './styles'

type Props = {
    title: string;
    value: number;
    color?: string;
    isExpense?: boolean;
}

const ResumeItem: React.FC<Props> = ({ title, value, color, isExpense }) => {
  return (
    <C.ItemInfo>
        <h3>{title}</h3>
        <C.ValueArea color={color}>{isExpense && '-'}{value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.ValueArea>
    </C.ItemInfo>
  );
}

export default ResumeItem;