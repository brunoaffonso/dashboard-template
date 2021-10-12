import React from 'react';
import { GlobalContexts } from '../Contexts/GlobalContexts';
import { TopbarContent, TopbarLeft, TopbarRight, Logo } from './TopbarStyles';

export default function TopBar() {
  const globalState = React.useContext(GlobalContexts);

  function handleClick() {
    globalState.setSidebarState(!globalState.sidebarState);
    console.log(globalState.sidebarState);
  }

  return (
    <TopbarContent>
      <TopbarLeft>
        <Logo>Cogic</Logo>
        <button onClick={handleClick}>Mudar estado</button>
      </TopbarLeft>
      <TopbarRight>User</TopbarRight>
    </TopbarContent>
  );
}
