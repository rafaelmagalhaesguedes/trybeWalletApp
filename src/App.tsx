import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet/Wallet';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Wallet /> } />
      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  );
}

export default App;
