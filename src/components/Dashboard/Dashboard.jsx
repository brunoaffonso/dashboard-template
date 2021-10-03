import MainContent from '../MainContent/MainContent';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import TopbarMenu from '../TopbarMenu/TopbarMenu';
import FooterContent from '../FooterContent/FooterContent';
import { Topbar, DashboardContent, Content, Sidebar } from './DashboardStyles';

export default function Dashboard() {
  return (
    <>
      <Topbar>
        <TopbarMenu></TopbarMenu>
      </Topbar>
      <DashboardContent>
        <Sidebar>
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
