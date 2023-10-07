import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import { EmailField, HeaderContainer, HeaderLogo, TotalField } from './Styles';
import bg_wallet from '../../images/logo_trybe_wallet.png';
import iconTotal from '../../images/iconTotalField.png';
import iconUser from '../../images/iconUser.png';

function Header() {
  const { email } = useSelector((state: RootStateType) => state.user);
  const { expenses } = useSelector((state: RootStateType) => state.wallet);

  const totalExpenses = expenses.reduce((total, expense) => {
    const exchangeRate = expense.exchangeRates[expense.currency]?.ask || 1;
    const convertedValue = parseFloat(expense.value) * Number(exchangeRate);
    return total + convertedValue;
  }, 0);

  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={ bg_wallet } alt="Logo Wallet" />
      </HeaderLogo>
      <TotalField data-testid="total-field">
        <img src={ iconTotal } alt="Total" />
        <strong>Total de despesas:</strong>
        {' '}
        { totalExpenses.toFixed(2) }
        <span data-testid="header-currency-field">
          {' '}
          BRL
        </span>
      </TotalField>
      <EmailField data-testid="email-field">
        <img src={ iconUser } alt="Total" />
        {' '}
        {email}
      </EmailField>
    </HeaderContainer>
  );
}

export default Header;
