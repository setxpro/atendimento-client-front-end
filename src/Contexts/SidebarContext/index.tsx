import { createContext, ReactNode, useState, useContext } from "react";

interface Props {
    showSidebar: boolean;
    openSidebarSettings: boolean;
    wrapperSidebar: () => void;
    wrapperSidebarSettings: () => void;
}

export const SidebarContext = createContext({} as Props)

export const SidebarProvider = ( { children } : { children: ReactNode }) => { 

    const [showSidebar, setShowSidebar] = useState(false);
    const [openSidebarSettings, setOpenSidebarSettings] = useState(false);

    const wrapperSidebar = () => setShowSidebar(!showSidebar);
    const wrapperSidebarSettings = () => setOpenSidebarSettings(!openSidebarSettings);

    return (
        <SidebarContext.Provider value={{
            showSidebar,
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