import './App.css';
import Cupones from './components/Cupones';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import Header from './components/Header';
import PromoApp from './components/PromoApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container-fluid fondo'>
      <Header />
      <hr />
      <Destacado />
      <Cupones />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;
