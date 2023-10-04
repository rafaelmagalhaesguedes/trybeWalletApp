import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionaAddUser } from '../../redux/actions';

function Login() {
  const dispatch = useDispatch();
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
    dispatch(actionaAddUser(formData.email));
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
    <section className="login-container">
      <div className="login-wrapper">
        <div className="login-logo">Logo</div>
        <form onSubmit={ handleSubmit }>
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
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
