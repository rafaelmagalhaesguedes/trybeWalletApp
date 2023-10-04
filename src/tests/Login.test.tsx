import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes Login', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  it('1. Verifica se o formulário e botão são reenderizados na tela: ', () => {
    // Encontra os elementos na tela
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button');

    // Executa as asserções
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('2. Verifica se o botão está desabilitado inicialmente: ', () => {
    // Encontra o botão na tela
    const button = screen.getByRole('button');

    // Verifica se está desabilitado
    expect(button).toBeDisabled();
  });

  it('3. Verifica se o formulário funciona corretamente: ', async () => {
    // Configura a instância do userEvent
    const user = userEvent.setup();

    // Encontra os elementos de entrada de email, senha e o botão
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button');

    // Preenche os campos de email e senha e clica no botão
    await user.type(emailInput, 'trybe@trybe.com');
    await user.type(passwordInput, '123123');
    await user.click(button);

    // Encontra um elemento após a ação e execute uma asserção
    const currencyField = screen.getByTestId('header-currency-field');
    expect(currencyField).toBeInTheDocument();
  });
});
