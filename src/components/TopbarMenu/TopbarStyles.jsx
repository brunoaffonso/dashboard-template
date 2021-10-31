import styled from '@emotion/styled';

export const TopbarContent = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const TopbarRight = styled.div``;

export const Logo = styled.span`
  font-size: large;
`;

export const ToggleButton = styled.a`
  border: 0;
  padding: 0;
  color: 7d7d7d;
  cursor: pointer;
  margin: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
