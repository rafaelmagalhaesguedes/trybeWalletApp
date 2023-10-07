import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import WalletForm from '../../components/WalletForm/WalletForm';
import { Container, Wrapper, SectionHeader, SectionTable } from './Styles';

function Wallet() {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>
          <Header />
          <WalletForm />
        </SectionHeader>
        <SectionTable>
          <Table />
        </SectionTable>
      </Wrapper>
    </Container>
  );
}

export default Wallet;
