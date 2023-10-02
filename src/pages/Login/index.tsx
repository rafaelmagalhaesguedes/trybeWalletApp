import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserEmail } from '../../redux/actions';
import { Dispatch } from '../../types';

function Login() {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (formData.password.length >= 6 && emailRegex.test(formData.email)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formData.email, formData.password]);

  const handleSubmit = () => {
    dispatch(saveUserEmail(formData.email));
    navigate('/carteira');
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
            disabled={ formValid }
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
