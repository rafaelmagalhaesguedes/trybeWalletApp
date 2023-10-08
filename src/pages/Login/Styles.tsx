import styled from 'styled-components';
import bg_login from '../../images/bg_login.png';

export const LoginContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg_login});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(47, 193, 140, 0.6);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 22rem;
  background-color: white;
  border: 1px solid #FFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 57px 98px;
  gap: 10px;

  @media only screen and ( max-width: 530px ) {
    width: 90%;
  }

  @media only screen and ( max-width: 768px ) {
    width: 90%;
  }
`;

export const Logo = styled.div`
  padding-bottom: 30px;
`;

export const Img = styled.img`
  Width: 268px;
  Height: 56px;

  @media only screen and ( max-width: 375px ) {
    width: 200px;
  }
`;

export const Input = styled.input`
  width: 20rem;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #003BE5;
  padding: 0 15px;
  
  &::placeholder {
    color: #003BE5;
  }

  &:focus {
    border: 1px solid darkblue;
    outline: 0;
  }

  @media only screen and ( max-width: 375px ) {
    width: 15rem;
  }

  @media only screen and ( max-width: 285px ) {
    width: 10rem;
  }
`;

export const LoginButton = styled.button`
  width: 20rem;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #003BE5;
  background-color: #003BE5;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;

  &:disabled {
    background-color: rgba(0, 59, 229, 0.7);
    border: none;
    cursor: not-allowed;
  }

  @media only screen and ( max-width: 375px ) {
    width: 15rem;
  }

  @media only screen and ( max-width: 285px ) {
    width: 10rem;
  }
`;
