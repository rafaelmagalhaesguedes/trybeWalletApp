import { Link } from 'react-router-dom';
import iconGhost from '../../images/ghost.png';
import { NotFound } from './Styles';

function PageNotFound() {
  return (
    <NotFound>
      <img src={ iconGhost } alt="Página não encontrada!" />
      <h1>Página não encontrada!</h1>
      <Link to="/">Voltar para página inicial</Link>
    </NotFound>
  );
}

export default PageNotFound;
