import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserEmail } from '../../redux/actions';
import { Dispatch, LoginDataType } from '../../types';

function Login() {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginDataType>({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword();
    setFormValid(isEmailValid && isPasswordValid);
  };

  const validatePassword = () => {
    return formData.password.length >= 6;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (formValid) {
      dispatch(saveUserEmail(formData.email));
      navigate('/carteira');
    }
  };

  return (
    <section className="login-container">
      <div className="login-wrapper">
        <div className="login-logo">Logo</div>
        <form className="login-form">
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ formData.email }
            onChange={ handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ formData.password }
            onChange={ handleChange }
          />
          <button
            type="submit"
            disabled={ !formValid }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
