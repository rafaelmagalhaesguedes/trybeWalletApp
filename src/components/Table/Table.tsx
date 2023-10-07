import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootStateType } from '../../types';
import { actionDeleteExpense, actionEditExpense } from '../../redux/actions';
import { TableContainer } from './Styles';

function Table() {
  const dispatch: DispatchType = useDispatch();
  const { expenses } = useSelector((state: RootStateType) => state.wallet);

  // Delete Expense
  const handleDeleteExpense = (id: number) => {
    dispatch(actionDeleteExpense(id));
  };

  // Edit Expense
  const handleEditExpense = (id: number) => {
    dispatch(actionEditExpense(id));
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method}</td>
            <td>{parseFloat(expense.value).toFixed(2)}</td>
            <td>{`${expense.exchangeRates[expense.currency].name}`}</td>
            <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                data-testid="edit-btn"
                onClick={ () => handleEditExpense(expense.id) }
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                onClick={ () => handleDeleteExpense(expense.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
}

export default Table;
