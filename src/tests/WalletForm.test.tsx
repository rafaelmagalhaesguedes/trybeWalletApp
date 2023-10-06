import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm/WalletForm';

describe('Testes Wallet Form component', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<WalletForm />);
  });

  it('1. Verifica se o formulário e o botão foram renderizados na tela. ', () => {
    expect(screen.getByTestId('value-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
    expect(screen.getByTestId('currency-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
