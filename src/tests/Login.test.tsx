import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes Login Page', () => {
  const EMAIL = 'email-input';
  const PASS = 'password-input';

  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  it('1. Verifica se o formulário e botão são reenderizados na tela: ', () => {
    // Encontra os elementos na tela
    const emailInput = screen.getByTestId(EMAIL);
    const passwordInput = screen.getByTestId(PASS);
    const button = screen.getByRole('button');

    // Executa as asserções
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('2. Verifica se o botão está desabilitado inicialmente: ', () => {
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
