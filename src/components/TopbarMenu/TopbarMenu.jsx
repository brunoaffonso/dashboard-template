import React from 'react';
import { GlobalContexts } from '../Contexts/GlobalContexts';
import {
  TopbarContent,
  TopbarLeft,
  TopbarRight,
  Logo,
  ToggleButton,
} from './TopbarStyles';
import DehazeOutlined from '@material-ui/icons/DehazeOutlined';

export default function TopBar() {
  const globalState = React.useContext(GlobalContexts);

  function handleClick() {
    globalState.setSidebarOpen(!globalState.sidebarOpen);
    console.log(globalState.sidebarOpen);
  }

  return (
    <TopbarContent>
      <TopbarLeft>
        <ToggleButton>
          <DehazeOutlined onClick={handleClick} />
        </ToggleButton>
        <Logo>Cogic</Logo>
      </TopbarLeft>
      <TopbarRight>User</TopbarRight>
    </TopbarContent>
  );
}
