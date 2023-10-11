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

beforeAll(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({ json: async () => mockData } as Response);
});

describe('Testando o estado global do Redux', () => {
  it('Possui a estrutura correta do estado global', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    expect(store.getState()).toEqual({
      user: {
        email: '',
      },
      wallet: {
        currencies: [],
        expenseId: null,
        expenseUpdate: false,
        expenses: [],
      },
    });
  });
});

describe('Testes Wallet Form component', () => {
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

    const button = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('3. Verifica se o botão Adicionar despesa está funcionando.', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);
  });

  it('4. Verifica se carrega as moedas corretamente da API', async () => {
    renderWithRouterAndRedux(<WalletForm />, { initialEntries: ['/carteira'], initialState });

    ['USD'].forEach((currency) => {
      expect(screen.getByDisplayValue(currency)).toBeInTheDocument();
    });
  });
});
