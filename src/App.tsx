import RoutesApp from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <RoutesApp/>
    </>
  );
}

export default App;
