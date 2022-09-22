import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemDetailContainer from './components/Container/ItemDetailContainer';

function App() {
  return (
    <div className='container-fluid fondo'>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/category/:categoryId' element={<Main/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
