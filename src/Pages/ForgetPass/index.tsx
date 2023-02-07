import { useState, useContext } from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../Contexts/Auth";

const ForgetPass = () => {

    const { forgetPass } = useContext(AuthContext);
    const navigate = useNavigate()
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
  
    const handleForgetPass = () => {
        if (!login) {
          return toast.error("Por favor, insira ao menos um login!")
        }
        if (!email) {
          return toast.error("Por favor, insira ao menos um e-mail!")
        }
  
        if (login && email) {
            forgetPass(login, email);
            navigate('/login');
        }
    }

    return (
        <C.Container>
          <h2>Esqueci minha senha</h2>
          <C.Content>
            <C.LockIcon/>
            <form>
              <input
                type="text"
                name="login"
                placeholder="Login..."
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="lnr lnr-eye"></span>
            </form>
            <C.ContentButon>
              <C.ButtonSend onClick={handleForgetPass}>ENVIAR</C.ButtonSend>
            </C.ContentButon>
          </C.Content>
        </C.Container>
      );
}

export default ForgetPass;