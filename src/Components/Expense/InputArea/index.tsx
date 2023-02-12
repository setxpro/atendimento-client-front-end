import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/Auth";
import { categories } from "../../../Mock/Categories";

import * as C from "./styles";
const InputArea = () => {

  const { user } = useContext(AuthContext);

  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = async() => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {

      const { data } = await axios.post('http://localhost:3333/api/create-expense', {
        userID: user?._id,
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        price: valueField,
      })

      clearFields();

      return data;
    }
  };
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.ContentTop>
      <C.InsertItemArea>
        <h3>Data</h3>
        <input
          type="date"
          name="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InsertItemArea>
      <C.InsertItemArea>
        <h3>Category</h3>
        <select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </select>
      </C.InsertItemArea>
      <C.InsertItemArea>
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InsertItemArea>
      <C.InsertItemArea>
        <h3>Value</h3>
        <input
          type="number"
          name="value"
          placeholder="R$"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InsertItemArea>
      <C.AddArea>
        <button onClick={handleAddEvent}>Adicionar</button>
      </C.AddArea>
    </C.ContentTop>
  );
};

export default InputArea;
