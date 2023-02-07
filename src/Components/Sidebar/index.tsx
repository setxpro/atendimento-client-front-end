import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth';
import { useSidebar } from '../../Contexts/SidebarContext';
import * as C from './styles';

const Sidebar = () => {
    const { wrapperSidebar, openSidebar } = useSidebar()
    const { logout } = useContext(AuthContext)
  return (
    <>
      <C.Container openSidebar={openSidebar}>
          <C.SidebarTop>
              <div></div><h2>CALLED</h2><C.BarsSidebarIcon onClick={wrapperSidebar}/>
          </C.SidebarTop>
          
          <C.SidebarMenu>

          </C.SidebarMenu>

          <C.SidebarBottom>
            <C.LogoutIcon onClick={logout}/>
          </C.SidebarBottom>
      </C.Container>
      <C.ContentBlur openSidebar={openSidebar} onClick={wrapperSidebar}></C.ContentBlur>
    </>
  );
}

export default Sidebar;