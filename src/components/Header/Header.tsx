import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';

function Header() {
  const { email } = useSelector((state: RootStateType) => state.user);
  const { expenses } = useSelector((state: RootStateType) => state.wallet);

  const totalExpenses = expenses.reduce((total, expense) => {
    const exchangeRate = expense.exchangeRates[expense.currency]?.ask || 1;
    const convertedValue = parseFloat(expense.value) * Number(exchangeRate);
    return total + convertedValue;
  }, 0);

  return (
    <header>
      <span data-testid="email-field">
        Email
        {' '}
        {email}
      </span>
      <span data-testid="total-field">
        { totalExpenses.toFixed(2) }
      </span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

export default Header;
