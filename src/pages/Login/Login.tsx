import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionAddUser } from '../../redux/actions';
import { DispatchType } from '../../types';
import img_logo from '../../images/logo_trybe_wallet.png';
import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  Logo,
  Img,
  Input,
  LoginButton,
} from './Styles';

function Login() {
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionAddUser(formData.email));
    navigate('/carteira');
  };

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (formData.password.length >= 6 && emailRegex.test(formData.email)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formData.email, formData.password]);

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm onSubmit={ handleSubmit }>
          <Logo>
            <Img src={ img_logo } alt="Logo" />
          </Logo>
          <Input
            data-testid="email-input"
            type="text"
            name="email"
            value={ formData.email }
            onChange={ handleChange }
            placeholder="E-mail"
          />
          <Input
            data-testid="password-input"
            type="password"
            name="password"
            value={ formData.password }
            onChange={ handleChange }
            placeholder="Senha"
          />
          <LoginButton
            type="submit"
            disabled={ formValid }
          >
            Entrar
          </LoginButton>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
