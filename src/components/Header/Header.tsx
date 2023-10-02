import { useSelector } from 'react-redux';
import { RootState } from '../../types';

function Header() {
  const { email } = useSelector((state: RootState) => state.user);
  return (
    <header>
      <div className="logo-header">Logo</div>
      <div className="total-field">
        <span data-testid="total-field">
          0
        </span>
        {' '}
        <span data-testid="header-currency-field">
          BRL
        </span>
      </div>
      <div data-testid="email-field">{ email }</div>
    </header>
  );
}

export default Header;
