import styled from 'styled-components';
import bg_login from '../../images/bg_login.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg_login});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(47, 193, 140, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const SectionHeader = styled.section`
  width: 80%;
  height: 370px;
  background: white;
  position: absolute;
  border-radius: 0 0 10px 10px;
  box-shadow: -4px 9px 13px 0px #05123666;
`;

export const SectionTable = styled.section`
  width: 90%;
  height: 400px;
  background: #003BE5;
  margin-top: 140px;
  border-radius: 10px;
`;
