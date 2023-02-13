import { Category } from "../Types/Category";

export const categories: Category = {
    food: {title: 'Alimentação', color: 'blue', expense: true},
    rent: {title: 'Aluguel', color: 'brown', expense: true},
    salary: {title: 'Salário', color: 'green', expense: false},
    gym: {title: 'Academia', color: 'orange', expense: true},
    university: {title: 'Faculdade', color: 'green', expense: true},
    savings: {title: 'Poupança', color: 'lime', expense: false},
    creditCard: {title: 'Cartão', color: 'red', expense: true},
    freelas: {title: 'Freelas', color: 'green', expense: false},
}