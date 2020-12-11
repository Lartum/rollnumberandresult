import './App.css';
import { Container } from '@material-ui/core'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
    <Header />
     <Container>
          <Home />
     </Container>
     <Footer />
    </div>
  );
}

export default App;
