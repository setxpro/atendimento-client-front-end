import React from 'react';
import { categories } from '../../../Mock/Categories';
import { Item } from '../../../Types/Item';
import { format } from 'date-fns'
import axios from 'axios';

type Props = {
  item: Item;
}

const TableItem: React.FC<Props> = ({ item }) => {

  const handleDeleteExpense = async (id: string) => {
      const { data } = await axios.delete(`http://localhost:3333/api/delete-expense/${id}`) 
      return data;
  }

  return (
      <tr>
        <td>{`${format(new Date(item.date), 'dd/MM/yyyy')}`}</td>
        <td>{categories[item.category].title}</td>
        <td>{item.title}</td>
        <td>{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        <td><button onClick={() => handleDeleteExpense(item._id)}>clean</button></td>
      </tr>
  );
}

export default TableItem;