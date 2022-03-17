import styled from 'styled-components';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <S.App>
      <S.Container>
        <Sidebar />
        <Chat />
      </S.Container>
    </S.App>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.App = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 2rem 3rem;
  background-color: #dadbd3;
`;

S.Container = styled.div`
  background-color: #ededed;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
