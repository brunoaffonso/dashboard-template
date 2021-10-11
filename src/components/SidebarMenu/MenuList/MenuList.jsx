import {
  MenuListContent,
  MenuTitle,
  MenuListItem,
  TextItem,
} from './MenuListStyles';
import React from 'react';
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import BuildOutlined from '@material-ui/icons/BuildOutlined';

export default function MenuList() {
  const [menu, setMenu] = React.useState('');

  function handleClick(e, item) {
    e.preventDefault();
    setMenu(item);
  }

  return (
    <>
      <MenuTitle>Dashboard</MenuTitle>
      <MenuListContent>
        <MenuListItem
          onClick={(e) => handleClick(e, 'dashboard')}
          active={menu === 'dashboard'}
        >
          <DashboardOutlined fontSize="large" />
          <TextItem>Dashboard</TextItem>
        </MenuListItem>
        <MenuListItem
          onClick={(e) => handleClick(e, 'contratos')}
          active={menu == 'contratos'}
        >
          <DescriptionOutlined fontSize="large" />
          <TextItem>Contratos</TextItem>
        </MenuListItem>
        <MenuListItem
          onClick={(e) => handleClick(e, 'materiais')}
          active={menu === 'materiais'}
          href="/api/hello"
        >
          <BuildOutlined fontSize="large" />
          <TextItem>Materiais</TextItem>
        </MenuListItem>
      </MenuListContent>
    </>
  );
}
