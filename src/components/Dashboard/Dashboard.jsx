import React from 'react';
import MainContent from '../MainContent/MainContent';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import TopbarMenu from '../TopbarMenu/TopbarMenu';
import FooterContent from '../FooterContent/FooterContent';
import {
  Topbar,
  DashboardContent,
  Content,
  Sidebar,
  SidebarToggle,
} from './DashboardStyles';
import { GlobalContexts } from '../Contexts/GlobalContexts';

export default function Dashboard() {
  const globalState = React.useContext(GlobalContexts);

  return (
    <>
      <Topbar>
        <TopbarMenu></TopbarMenu>
      </Topbar>
      <DashboardContent>
        {/* {globalState.sidebarOpen && (
          <SidebarToggle>
            <SidebarMenu></SidebarMenu>
          </SidebarToggle>
        )} */}
        <Sidebar open={globalState.sidebarOpen}>
          <SidebarMenu></SidebarMenu>
        </Sidebar>
        <Content>
          <MainContent></MainContent>
          <FooterContent></FooterContent>
        </Content>
      </DashboardContent>
    </>
  );
}
