import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootStateType } from '../../types';
import { actionDeleteExpense, actionEditExpense } from '../../redux/actions';
import { TableBody, TableContainer, TableHeader } from './Styles';
import iconEdit from '../../images/iconEdit.png';
import iconDelet from '../../images/iconDelet.png';

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
      <TableHeader>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th className="th_edit">Editar/Excluir</th>
        </tr>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method}</td>
            <td>{parseFloat(expense.value).toFixed(2)}</td>
            <td>{ expense.currency }</td>
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
                <img src={ iconEdit } alt="Edit expense" title="Editar" />
              </button>
              <button
                data-testid="delete-btn"
                onClick={ () => handleDeleteExpense(expense.id) }
              >
                <img src={ iconDelet } alt="Delet expense" title="Excluir" />
              </button>
            </td>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default Table;
