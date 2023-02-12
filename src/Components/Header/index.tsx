import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/Auth';
import { useSidebar } from '../../Contexts/SidebarContext';
import * as C from './styles';

const Header = () => {
    const { wrapperSidebar, wrapperSidebarSettings } = useSidebar();
    const { user } = useContext(AuthContext);

    const [showDropdown, setShowDropDown] = useState(false)

  return (
    <C.Container>
       <C.LeftSide>
            <C.BarsIcon onClick={wrapperSidebar}/>
       </C.LeftSide>
       <C.RightSide  onMouseLeave={() => setShowDropDown(false)}>
            <C.ContentBellIcon onMouseOver={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
                <C.PseudoElement >
                    <C.BellIcon/>
                </C.PseudoElement>
            </C.ContentBellIcon>
                    <C.DropD onMouseOver={() => setShowDropDown(true)} showDropdown={showDropdown}>scsc</C.DropD>
            <C.ContentNameAvatar>
                <C.ContentAvatarName>
                    <h4>{user?.name} {user?.middlename}</h4>
                    <p>{user?.assignments}</p>
                </C.ContentAvatarName>
                <C.ContentAvatar onClick={wrapperSidebarSettings}>
                    <C.Avatar src={user?.avatar} alt="avatar"/>
                </C.ContentAvatar>
            </C.ContentNameAvatar>
       </C.RightSide>
    </C.Container>
  );
}

export default Header;