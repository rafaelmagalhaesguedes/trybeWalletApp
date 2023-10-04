import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';

function Header() {
  const { email } = useSelector((state: RootStateType) => state.user);
  const { expenses } = useSelector((state: RootStateType) => state.wallet);

  const totalExpenses = expenses.reduce((total, expense) => {
    // Converte Value para float
    const expenseValue = parseFloat(expense.value);
    // Seta a moeda para pegar o ask
    const currencyCode = expense.currency;
    // Pega o valor ask da cotação da moeda
    const exchangeRate = expense.exchangeRates[currencyCode]?.ask || 1;
    // Multiplica o valor pela cotação
    const convertedValue = expenseValue * exchangeRate;
    // Soma o valor convertido ao total de despesas
    return total + convertedValue;
  }, 0);

  return (
    <header>
      <span data-testid="email-field">
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
