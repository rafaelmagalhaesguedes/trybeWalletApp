import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 25px 100px;
  justify-content: space-between;
  align-items: center;

  @media only screen and ( max-width: 768px ) {
    padding: 20px;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 200px;
  }
`;

export const TotalField = styled.span`
  color: #003BE5;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EmailField = styled.span`
  color: #2FC18C;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
