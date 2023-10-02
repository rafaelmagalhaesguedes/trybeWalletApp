import { useSelector } from 'react-redux';
import { RootState } from '../../types';

function Wallet() {
  const rootState = useSelector((state: RootState) => state.user.email);

  return (
    <header>
      <div className="logo">TrybeWallet</div>
      <div>{ rootState }</div>
    </header>
  );
}

export default Wallet;
