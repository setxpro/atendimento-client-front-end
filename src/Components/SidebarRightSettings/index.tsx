import React from 'react';

import * as C from './styles';
import { useSidebar } from '../../Contexts/SidebarContext';

const SidebarRightSettings: React.FC = () => {
    const { openSidebarSettings, wrapperSidebarSettings } = useSidebar()
  return (
    <>
        <C.Container openSidebarSettings={openSidebarSettings}>
          <C.SettingsTop>
            <C.CloseIcon onClick={wrapperSidebarSettings}/>
            <h2>Configurações</h2>
            <div/>
          </C.SettingsTop>
        </C.Container>
        <C.ContentBlur openSidebarSettings={openSidebarSettings} onClick={wrapperSidebarSettings}></C.ContentBlur>
    </>
  );
}

export default SidebarRightSettings;