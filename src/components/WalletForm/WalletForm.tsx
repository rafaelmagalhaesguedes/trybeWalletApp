import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../../services/api';
import { RootStateType, DispatchType, WalletFormType } from '../../types';
import {
  actionAddExpense,
  actionUpdateExpense,
  actionFetchApi,
} from '../../redux/actions';
import {
  ButtonForm,
  Form,
  FormContainer,
  InputDesc,
  InputValue,
  Label,
  Select,
} from './Styles';

function WalletForm() {
  const dispatch: DispatchType = useDispatch();
  const {
    currencies,
    expenses,
    expenseId,
    expenseUpdate,
  } = useSelector((state: RootStateType) => state.wallet);
  const [formData, setFormData] = useState<WalletFormType>({
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

  const handleAddExpense = async (e:
  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Requisição para API
    const rate = await fetchCurrencies();
    // Salva Dados no estado global junto com a Cotação da moeda
    const Expense = { ...formData, exchangeRates: rate };
    // Dipara action para adicionar ao estado global
    dispatch(actionAddExpense(Expense));
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

  const handleUpdateExpense = async (e:
  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Requisição para API
    const rate = await fetchCurrencies();
    // Atualiza os dados
    const updatedExpense = { ...formData, exchangeRates: rate };
    // Dispara action para atualizar os dados no estado global
    dispatch(actionUpdateExpense(updatedExpense, expenseId));
    // Reseta o form
    setFormData({ ...formData, value: '', description: '' });
  };

  // Atualiza os dados da tabela em caso de Edição de dados
  useEffect(() => {
    // Verifica se o Id salvo no estado global é igual ao Id da despesa
    const expenseObj = expenses.find((expense) => expense.id === expenseId);
    if (expenseObj) {
      // Desestrura os dados do objeto expense
      const { id, value, description, currency, method, tag } = expenseObj;
      // Carrega dados no form
      setFormData({ id, value, description, currency, method, tag });
    }
  }, [expenseId, expenseUpdate, expenses]);

  // Busca moedas da API com thunk
  useEffect(() => {
    dispatch(actionFetchApi());
  }, [dispatch]);

  return (
    <FormContainer>
      <Form>
        <Label htmlFor="description">
          Descrição da despesa
          {' '}
          <InputDesc
            type="text"
            name="description"
            data-testid="description-input"
            value={ formData.description }
            onChange={ handleChange }
          />
        </Label>

        <Label>
          Categoria da despesa
          {' '}
          <Select
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
          </Select>
        </Label>

        <Label>
          Valor
          {' '}
          <InputValue
            type="number"
            name="value"
            data-testid="value-input"
            value={ formData.value }
            onChange={ handleChange }
          />
        </Label>

        <Label>
          Método de pagamento
          {' '}
          <Select
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </Select>
        </Label>

        <Label>
          Moeda
          {' '}
          <Select
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
          </Select>
        </Label>
        <ButtonForm
          className="btn"
          type="button"
          onClick={ expenseUpdate ? handleUpdateExpense : handleAddExpense }
        >
          {expenseUpdate ? 'Editar despesa' : 'Adicionar despesa'}
        </ButtonForm>
      </Form>
    </FormContainer>
  );
}

export default WalletForm;
