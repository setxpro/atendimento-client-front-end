import { Routes, Route } from 'react-router-dom'
import Home from './../Pages/Home/index';
import Layout from '../Components/Layout';
import { Security } from '../Components/Security';
import Login from '../Pages/Login';
import ForgetPass from '../Pages/ForgetPass';
import UpdatePassword from '../Pages/UpdatePassword';



const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget-pass" element={<ForgetPass/>}/>
        <Route path="/update-pass/:id" element={<UpdatePassword/>}/>
    </Routes>
  );
}

export default RoutesApp;