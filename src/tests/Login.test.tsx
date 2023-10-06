import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('3. Verifica se o formulário funciona corretamente: ', async () => {
    const user = userEvent.setup();

    const emailInput = screen.getByTestId(EMAIL);
    const passwordInput = screen.getByTestId(PASS);
    const button = screen.getByRole('button');

    await user.type(emailInput, 'trybe@trybe.com');
    await user.type(passwordInput, '123123');
    await user.click(button);

    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
  });

  test('4. Verifica se ao acessar diretamente a rota /carteira, o formulário não é renderizado: ', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    expect(screen.queryByText('Value: ')).not.toBeInTheDocument();
    expect(screen.queryByText('Description: ')).not.toBeInTheDocument();
  });

  it('5. Verifica se o botão de login é enabled após preencher campos de email e senha corretamente: ', async () => {
    const emailInput = screen.getByTestId(EMAIL);
    const passwordInput = screen.getByTestId(PASS);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    await userEvent.type(emailInput, 'rafael@rafael.com');
    await userEvent.type(passwordInput, '123123');

    expect(button).not.toBeDisabled();
  });

  it('6. Verifica se ao clicar no botão Entrar é redirecionado para /carteira', async () => {
    const button = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const emailTest = 'user@email.com';
    const passTest = '123456';

    expect(button).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await userEvent.type(emailInput, emailTest);
    await userEvent.type(passwordInput, passTest);

    expect(button).toBeEnabled();
    expect(emailInput).toHaveValue(emailTest);
    expect(passwordInput).toHaveValue(passTest);

    await userEvent.click(button);

    expect(button).not.toBeInTheDocument();
    expect(emailInput).not.toBeInTheDocument();
    expect(passwordInput).not.toBeInTheDocument();
  });
});
