import styled from '@emotion/styled';

export const MenuTitle = styled.div`
  color: #7d7d7d;
  text-align: left;
  font-size: 0.8em;
  margin: 10px;
`;

export const MenuListContent = styled.div`
  text-align: left;
  font-size: 1em;
  margin: 0;
  padding: 0;
  margin-bottom: 25px;
  border-bottom: 1px solid lightgray;
`;

export const MenuListItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.active ? '#fff' : '#7d7d7d')};
  margin: 10px 0px;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => (props.active ? '#2196f3' : '')};
  &:hover {
    color: #2196f3;
    background: #e3f2fd;
  }
`;

export const TextItem = styled.span`
  text-align: center;
  margin-left: 20px;
`;
