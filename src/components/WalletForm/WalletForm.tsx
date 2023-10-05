import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootStateType, DispatchType } from '../../types';
import { actionAddExpenses, actionFetchApi } from '../../redux/actions';
import { fetchCurrencies } from '../../services/api';

function WalletForm() {
  const dispatch: DispatchType = useDispatch();
  const { currencies } = useSelector((state: RootStateType) => state.wallet);
  const [formData, setFormData] = useState({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Requisição para API
    const rate = await fetchCurrencies();
    // Salva Dados no estado global junto com a Cotação da moeda
    const Expense = { ...formData, exchangeRates: rate };
    // Dispara action para salvar os dados
    dispatch(actionAddExpenses(Expense));
    // Reseta o formulário
    setFormData({
      id: Expense.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };
  // Busca moedas da API
  useEffect(() => {
    dispatch(actionFetchApi());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Value:
          <input
            type="number"
            name="value"
            data-testid="value-input"
            value={ formData.value }
            onChange={ handleChange }
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            data-testid="description-input"
            value={ formData.description }
            onChange={ handleChange }
          />
        </label>

        <label>
          Currency:
          <select
            data-testid="currency-input"
            name="currency"
            value={ formData.currency }
            onChange={ handleChange }
          >
            {
            currencies.map((coin) => {
              return (
                <option key={ coin }>
                  {coin}
                </option>
              );
            })
            }
          </select>
        </label>

        <label>
          Payment method:
          <select
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label>
          Category:
          <select
            data-testid="tag-input"
            name="tag"
            value={ formData.tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
