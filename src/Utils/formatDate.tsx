import { Item } from "../Types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = ( list: Item[], date: string ): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
         
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }

    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
export const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;


export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${months[parseInt(month) - 1]} de ${year}`;
}