import styled from '@emotion/styled';

export const ChartResponsive = styled.div`
  width: 1000px;
  height: 400px;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 800px;
    height: 400px;
  }

  @media (max-width: 1050px) {
    width: 600px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 400px;
    height: 200px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 100px;
  }
`;
