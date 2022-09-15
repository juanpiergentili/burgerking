import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/Container/ItemDetailContainer';

function App() {
  return (
    <div className='container-fluid fondo'>
      <Header />
      <Routes>
        <Route path='/menu' element={<ItemListContainer/>}/>
        <Route path='' element={<Main/>}/>
        <Route path='' element={<Footer />}/>
        <Route path='/menu/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
