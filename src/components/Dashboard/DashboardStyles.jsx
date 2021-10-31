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
  /* position: fixed; */
  display: flex;
  height: calc(100vh - 55px);
  /* min-width: 200px; */
  background: #fff;
  box-shadow: 1px 0px 5px #7d7d7d;
  margin-right: 5px;

  ${(props) => (props.open ? console.log('aberto') : console.log('fechado'))};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* margin-left: 200px; */
  height: calc(100vh - 55px);
  overflow-y: auto;

  /* @media (max-width: 768px) {
    margin-left: auto;
  } */
`;
