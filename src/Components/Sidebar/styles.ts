import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2'
import { 
    AiOutlinePoweroff, 
    AiOutlineBarChart,
    AiOutlineMessage
} from 'react-icons/ai'
import { 
    MdOutlineAttachMoney, 
    MdOutlineDesignServices,
    MdOutlineContactSupport,

} from 'react-icons/md'

export const Container = styled.div<{ isOpenSidebar: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${props => props.isOpenSidebar ? '245px' : '0px'};
    overflow: hidden;
    background: var(--color-sidebar);

    transition: .5s ease;
    z-index: 999;
`;
export const SidebarTop = styled.div`
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px;
   border-bottom: 1px solid #5555;

    h2 {
        color: var(--color-text);
        font-weight: 500;
        user-select: none;
        white-space: nowrap;
    }
`;

export const BarsSidebarIcon = styled(HiBars3BottomRight)`
    color: var(--color-text);
    font-size: 2.2em;
    cursor: pointer;
`;
export const LogoutIcon = styled(AiOutlinePoweroff)`
    color: var(--color-text);
    font-size: 2.2em;
    cursor: pointer;
`;

export const ContentBlur = styled.div<{ isOpenSidebar: boolean }>`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;

    display: ${props => props.isOpenSidebar ? 'inline' : 'none'};
`;

export const SidebarMenu = styled.div<{  isOpenSidebar: boolean;}>`
    height: calc(100vh - (70px + 80px));
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .active {
            background: rgba(100, 100, 100, 0.5)
    }

    a {
        display: flex;
        align-items: center;
        gap: 10px;

        
        
        padding: 0.5rem;
        border-radius: 8px;
        white-space: nowrap;
        text-decoration: none;

        h4 {
            color: #fff;
            font-weight: 500;
            opacity: ${props => props.isOpenSidebar ? '1' : '0'};
        }

        transition: all .8s ease;

        

        &:hover {
            background: rgba(100, 100, 100, 0.5);
        }
    }
`;

export const SidebarBottom = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #5555;
`;

export const DashboardIcon = styled(AiOutlineBarChart)<{ isOpenSidebar: boolean }>`
    color: #fff;
    font-size: 1.5em;
    transition: .5s all ease;

    opacity: ${props => props.isOpenSidebar ? '1' : '0'};
`;
export const MessageIcon = styled(AiOutlineMessage)<{ isOpenSidebar: boolean }>`
    color: #fff;
    font-size: 1.5em;
`;
export const ExpenseIcon = styled(MdOutlineAttachMoney)<{ isOpenSidebar: boolean }>`
    color: #fff;
    font-size: 1.5em;
`;
export const OrderServiceIcon = styled(MdOutlineDesignServices)<{ isOpenSidebar: boolean }>`
    color: #fff;
    font-size: 1.5em;
`;
export const SupportIcon = styled(MdOutlineContactSupport)<{ isOpenSidebar: boolean }>`
    color: #fff;
    font-size: 1.5em;
`;