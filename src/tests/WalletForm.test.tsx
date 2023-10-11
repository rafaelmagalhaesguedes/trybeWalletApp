import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm/WalletForm';
import mockData from './helpers/mockData';
import App from '../App';

const initialState = {
  user: {
    email: 'teste@test.com',
  },
  wallet: {
    currencies: Object.keys(mockData),
    expenses: [{
      id: 0,
      exchangeRates: mockData,
      value: '50',
      currency: 'USD',
      description: 'Despesa',
      tag: 'Alimentação',
      method: 'Dinheiro',
    }],
    expenseId: null,
    expenseUpdate: false,
  },
};

describe('Testando o estado global do Redux', () => {
  it('Possui a estrutura correta do estado global', () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialState });
    expect(store.getState()).toEqual(initialState);
  });
});

describe('Testando se form renderiza corretamente na tela', () => {
  it('1. Verifica se o formulário e o botão foram renderizados na tela. ', () => {
    renderWithRouterAndRedux(<WalletForm />);
    expect(screen.getByTestId('value-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
    expect(screen.getByTestId('currency-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('2. Possui o botão "Adicionar despesa" no form', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(button).toBeInTheDocument();
  });

  it('3. Verifica se carrega as moedas corretamente da API', async () => {
    renderWithRouterAndRedux(<WalletForm />, { initialEntries: ['/carteira'], initialState });

    ['USD'].forEach((currency) => {
      expect(screen.getByDisplayValue(currency)).toBeInTheDocument();
    });
  });
});

describe('Testando se as informações são salvas corretamente', () => {
  it('1. Salva os dados do formulário no estado global', async () => {
    const { store } = renderWithRouterAndRedux(
      <WalletForm />,
      { initialEntries: ['/carteira'], initialState },
    );

    vi.spyOn(store, 'dispatch');

    // Formulário com valores simulados
    const descriptionInput = screen.getByTestId('description-input');
    const valueInput = screen.getByTestId('value-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');

    await userEvent.type(descriptionInput, 'Nova Descrição');
    await userEvent.type(valueInput, '400');
    await userEvent.type(currencyInput, 'USD');
    await userEvent.type(methodInput, 'Dinheiro');
    await userEvent.type(tagInput, 'Alimentação');

    // Simula click no botão adicionar despesa
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    await userEvent.click(button);

    // Verifica se o estado global foi alterado corretamente
    expect(store.getState().wallet.expenses[0].description).toBe('Nova Descrição');

    // Verifica se o dispatch foi chamado
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
