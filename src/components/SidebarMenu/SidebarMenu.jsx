import MenuList from './MenuList/MenuList';
import MenuList2 from './MenuList/MenuList2';
import { SidebarContent } from './SidebarMenuStyles';

export default function SideBarMenu() {
  return (
    <SidebarContent>
      <MenuList></MenuList>
      <MenuList2></MenuList2>
    </SidebarContent>
  );
}
