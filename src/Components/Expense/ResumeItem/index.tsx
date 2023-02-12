import React from 'react';

import * as C from './styles'

type Props = {
    title: string;
    value: number;
    color?: string;
}

const ResumeItem: React.FC<Props> = ({ title, value, color }) => {
  return (
    <C.ItemInfo>
        <h3>{title}</h3>
        <C.ValueArea color={color}>{value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.ValueArea>
    </C.ItemInfo>
  );
}

export default ResumeItem;