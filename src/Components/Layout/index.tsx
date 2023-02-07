import React, { ReactNode } from 'react';

import * as C from './styles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { SidebarProvider } from '../../Contexts/SidebarContext';
import SidebarRightSettings from './../SidebarRightSettings/index';

const Layout = ({children}:{children: ReactNode}) => {
  return (
    <C.Container>
        <SidebarProvider>
            <Header/>
            <Sidebar/>
            <SidebarRightSettings/>
            {children}
        </SidebarProvider>
    </C.Container>
  );
}

export default Layout;