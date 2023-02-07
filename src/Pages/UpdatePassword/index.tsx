import React, { useState, useContext } from 'react';

import * as C from './styles'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatePassword: React.FC = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleUpdatePassword = async () => {

        if (!newPassword) {
          return toast.error("Por favor, insira ao menos uma nova senha!")
        }
        if (!confirmPass) {
          return toast.error("Por favor, confirme novamente a nova senha!")
        }
        if (newPassword !== confirmPass) {
          return toast.error("As senhas inseridas não são iguais!")
        }

        const { data } = await axios.patch(`http://localhost:3333/api/update-user/${id}`, {
            password: newPassword
        })

        if (data.status) {
            toast.success("Senha atualizada com sucesso!")
            navigate('/');
        }
 
        return data;
    }

  return (
    <C.Container>
      <C.Content>
        <C.LockIcon/>
        <h1>Update Password</h1>
        <form>
          <input
            type="password"
            name="new-senha"
            placeholder="Nova senha.."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="new-senha"
            placeholder="Repetir nova senha.."
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </form>
        <C.ContentButon>
          <C.ButtonSend onClick={handleUpdatePassword}>Atualizar</C.ButtonSend>
        </C.ContentButon>
      </C.Content>
    </C.Container>
  );
}

export default UpdatePassword;