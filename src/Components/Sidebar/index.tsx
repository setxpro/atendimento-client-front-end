import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth';
import { useSidebar } from '../../Contexts/SidebarContext';
import * as C from './styles';

const Sidebar = () => {
    const { wrapperSidebar, showSidebar } = useSidebar()
    const { logout } = useContext(AuthContext)

    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);

    const toggleSelect1 = () => {
      setOption1(true);
      setOptionDb("option1")
      setOption2(false)
      setOption3(false)
      setOption4(false)
      setOption5(false)
    }
    const toggleSelect2 = () => {
      setOption2(true);
      setOptionDb("option2")
      setOption3(false)
      setOption4(false)
      setOption5(false)
      setOption1(false)
    }
    const toggleSelect3 = () => {
      setOption3(true);
      setOptionDb("option3")
      setOption4(false)
      setOption5(false)
      setOption1(false)
      setOption2(false)
    }
    const toggleSelect4 = () => {
      setOption4(true);
      setOptionDb("option4")
      setOption5(false)
      setOption1(false)
      setOption2(false)
      setOption3(false)
    }
    const toggleSelect5 = () => {
      setOption5(true);
      setOptionDb("option5")
      setOption4(false)
      setOption1(false)
      setOption2(false)
      setOption3(false)
    }

    
    const setOptionDb = (opt: string) => {
      const dbOption = localStorage.setItem("opt", JSON.stringify(opt));
      return dbOption;
    }

    useEffect(() => {
      const isActive = localStorage.getItem("opt")

      if (isActive) {
          const optionSelected = JSON.parse(isActive);

          if (optionSelected === "option1") {
            setOption1(true);
          }
          if (optionSelected === "option2") {
            setOption2(true);
          }
          if (optionSelected === "option3") {
            setOption3(true);
          }
          if (optionSelected === "option4") {
            setOption4(true);
          }
          if (optionSelected === "option5") {
            setOption5(true);
          }
      }
    }, [])

  return (
    <React.Fragment>
      <C.Container isOpenSidebar={showSidebar}>
          <C.SidebarTop>
              <div></div><h2>CALLED</h2><C.BarsSidebarIcon onClick={wrapperSidebar}/>
          </C.SidebarTop>
          
          <C.SidebarMenu isOpenSidebar={showSidebar}>
            <Link to="/dashboard"  onClick={toggleSelect1} className={option1 ? 'active' : ''}><C.DashboardIcon isOpenSidebar={showSidebar}/><h4>Dashboards</h4></Link>
            <Link to="/expense" onClick={toggleSelect2} className={option2 ? 'active' : ''}><C.ExpenseIcon isOpenSidebar={showSidebar}/><h4>Expense</h4></Link>
            <Link to="/tasks" onClick={toggleSelect3} className={option3 ? 'active' : ''}><C.OrderServiceIcon isOpenSidebar={showSidebar}/><h4>Tasks</h4></Link>
            <Link to="/messages" onClick={toggleSelect4} className={option4 ? 'active' : ''}><C.MessageIcon isOpenSidebar={showSidebar}/><h4>Message</h4></Link>
            <Link to="/supports" onClick={toggleSelect5} className={option5 ? 'active' : ''}><C.SupportIcon isOpenSidebar={showSidebar}/><h4>Support</h4></Link>
          </C.SidebarMenu>

          <C.SidebarBottom>
            <C.LogoutIcon onClick={logout}/>
          </C.SidebarBottom>
      </C.Container>
      <C.ContentBlur isOpenSidebar={showSidebar} onClick={wrapperSidebar}></C.ContentBlur>
    </React.Fragment>
  );
}

export default Sidebar;