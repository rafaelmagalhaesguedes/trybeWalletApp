function WalletForm() {
  return (
    <form>
      <div className="inputs">
        <label>
          Descrição da despesa
          {' '}
          <input
            data-testid="description-input"
            type="text"
            name="description"
          />
        </label>

        <label>
          Categoria da despesa
          {' '}
          <select
            data-testid="tag-input"
            name="tag"
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
            name="valueInput"
          />
        </label>

        <label>
          Método de pagamento
          {' '}
          <select
            data-testid="method-input"
            name="method"
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
          >
            <option value="dinheiro">USD</option>
          </select>
        </label>
      </div>
      <div>
        <button>Adicionar despesa</button>
      </div>
    </form>
  );
}

export default WalletForm;
