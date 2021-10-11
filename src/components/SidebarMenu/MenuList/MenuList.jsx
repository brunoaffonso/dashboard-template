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
  const [active, setActive] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <MenuTitle>Dashboard</MenuTitle>
      <MenuListContent>
        <MenuListItem href="/api/hello">
          <DashboardOutlined fontSize="large" />
          <TextItem>Dashboard</TextItem>
        </MenuListItem>
        <MenuListItem onClick={(e) => handleClick(e)}>
          <DescriptionOutlined fontSize="large" />
          <TextItem>Contratos</TextItem>
        </MenuListItem>
        <MenuListItem onClick={(e) => handleClick(e)}>
          <BuildOutlined fontSize="large" />
          <TextItem>Materiais</TextItem>
        </MenuListItem>
      </MenuListContent>
    </>
  );
}
