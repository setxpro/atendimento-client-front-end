import { createContext, ReactNode, useState, useContext } from "react";

interface Props {
    openSidebar: boolean;
    openSidebarSettings: boolean;
    wrapperSidebar: () => void;
    wrapperSidebarSettings: () => void;
}

export const SidebarContext = createContext({} as Props)

export const SidebarProvider = ( { children } : { children: ReactNode }) => { 

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openSidebarSettings, setOpenSidebarSettings] = useState(false);

    const wrapperSidebar = () => setOpenSidebar(!openSidebar);
    const wrapperSidebarSettings = () => setOpenSidebarSettings(!openSidebarSettings);

    return (
        <SidebarContext.Provider value={{
            openSidebar,
            wrapperSidebar,
            openSidebarSettings,
            wrapperSidebarSettings
        }}>{children}</SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const sidebar = useContext(SidebarContext);
    return sidebar;
}