import styled from '@emotion/styled';

export const Topbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  padding: 15px 0;
  z-index: 999;
  background: #fff;
  box-shadow: 0px 0px 5px #7d7d7d;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  flex: 1;
  position: fixed;
  display: flex;
  height: calc(100vh - 55px);
  min-width: 16%;
  background: #fff;
  box-shadow: 1px 0px 5px #7d7d7d;
`;

export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 16%;
`;
