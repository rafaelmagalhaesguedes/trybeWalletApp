import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import WalletForm from '../../components/WalletForm/WalletForm';

function Wallet() {
  return (
    <div className="container">
      <Header />
      <main>
        <WalletForm />
        <Table />
      </main>
    </div>
  );
}

export default Wallet;
