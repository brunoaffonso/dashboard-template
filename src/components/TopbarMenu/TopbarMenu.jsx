import { TopbarContent, TopbarLeft, TopbarRight, Logo } from './TopbarStyles';

export default function TopBar() {
  return (
    <TopbarContent>
      <TopbarLeft>
        <Logo>Cogic</Logo>
      </TopbarLeft>
      <TopbarRight>User</TopbarRight>
    </TopbarContent>
  );
}
