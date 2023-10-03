import { useState } from 'react';
import { Expenses } from '../types';

function WalletForm() {
  const [nextId, setNextId] = useState(0);
  const [formData, setFormData] = useState({
    id: 0,
    description: '',
    tag: '',
    value: '',
    method: '',
    currency: 'USD',
  });

  const handleChange = (e:
  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
    // Crie um objeto de despesa
    const { description, tag, value, method, currency } = formData;
    //
    const expense: Expenses = {
      id: Date.now(), // ID sequencial
      value,
      description,
      currency,
      method,
      tag,
    };

    // Dispatch da ação para adicionar a despesa ao estado global
    dispatch(addExpense(expense));

    setNextId(nextId + 1);

    // Limpe os campos do formulário
    setFormData({
      id: nextId,
      description: '',
      tag: '',
      value: '',
      method: '',
      currency: '', // Defina um valor padrão para a moeda, se necessário
    });
  };

  return (
    <form onChange={ handleSubmit }>
      <div className="inputs">
        <label>
          Descrição da despesa
          {' '}
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
          />
        </label>

        <label>
          Categoria da despesa
          {' '}
          <select
            data-testid="tag-input"
            name="tag"
            value={ formData.tag }
            onChange={ handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <label>
          Valor
          {' '}
          <input
            data-testid="value-input"
            type="text"
            name="value"
            value={ formData.value }
            onChange={ handleChange }
          />
        </label>

        <label>
          Método de pagamento
          {' '}
          <select
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoDeCredito">Cartão de crédito</option>
            <option value="cartaoDeDebito">Cartão de débito</option>
          </select>
        </label>

        <label>
          Moeda
          {' '}
          <select
            data-testid="currency-input"
            name="currency"
            value={ formData.currency }
            onChange={ handleChange }
          >
            <option value="dinheiro">USD</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Adicionar despesa</button>
      </div>
    </form>
  );
}

export default WalletForm;
