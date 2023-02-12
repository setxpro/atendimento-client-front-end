import { Routes, Route } from 'react-router-dom'
import Home from './../Pages/Home/index';
import Layout from '../Components/Layout';
import { Security } from '../Components/Security';
import Login from '../Pages/Login';
import ForgetPass from '../Pages/ForgetPass';
import UpdatePassword from '../Pages/UpdatePassword';
import Expense from '../Pages/Expense';



const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route path="/forget-pass" element={<ForgetPass/>}/>
        <Route path="/update-pass/:id" element={<UpdatePassword/>}/>

        <Route path="/" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        <Route path="/dashboard" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        <Route path="/expense" element={
          <Security>
            <Layout>
              <Expense/>
            </Layout>
          </Security>
        }/>
        <Route path="/order-service" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        <Route path="/messages" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        <Route path="/supports" element={
          <Security>
            <Layout>
              <Home/>
            </Layout>
          </Security>
        }/>
        
    </Routes>
  );
}

export default RoutesApp;