import React from 'react'
import RoutesApp from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <GlobalStyle/>
      <RoutesApp/>
    </React.Fragment>
  );
}

export default App;
