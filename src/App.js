import './App.css';
import Topsection from './components/Topsection';
import styled from "styled-components"
import Bottomsection from './components/Bottomsection';

const Container = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;  
  padding: 1% 10%;
`

function App() {
  return (
    <Container>
      <Topsection />
      <Bottomsection />
    </Container>  
  );
}

export default App;
