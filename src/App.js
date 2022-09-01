import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='container-fluid fondo'>
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
