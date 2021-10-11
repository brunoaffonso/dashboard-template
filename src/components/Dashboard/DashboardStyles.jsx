import styled from '@emotion/styled';

export const Topbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  padding: 15px 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid lightgray;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  flex: 1;
  position: sticky;
  display: flex;
  top: 55px;
  left: 0;
  height: calc(100vh - 55px);
  min-width: 260px;
`;

export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
