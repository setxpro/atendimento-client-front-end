import { useState, useContext } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../Contexts/Auth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
      if (!login) {
        return toast.error("Por favor, insira ao menos um login!")
      }
      if (!password) {
        return toast.error("Por favor, insira ao menos um e-mail!")
      }

      if (login && password) {
        signIn(login, password);
        navigate('/');
      }
  }

  return (
    <C.Container>
      <C.Content>
        <C.LockIcon/>
        <h1>Sign in</h1>
        <form>
          <input
            type="text"
            name="login"
            placeholder="Login..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            
            name="senha"
            placeholder="Senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </form>
        <C.ContentButon>
          <C.ButtonSend onClick={handleLogin}>Fazer Login</C.ButtonSend>
          <Link to="/forget-pass">Esqueci minha senha</Link>
        </C.ContentButon>
      </C.Content>
    </C.Container>
  );
};

export default Login;
