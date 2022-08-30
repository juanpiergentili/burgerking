import './App.css';
import Cupones from './assets/Cupones';
import Destacado from './assets/Destacado';
import Footer from './assets/Footer';
import Header from './assets/Header';
import PromoApp from './assets/PromoApp';

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
