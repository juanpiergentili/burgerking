import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Provider from './components/Context/Context';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout/Checkout';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE57ej5TMb8KjWCMx3-nvITn2bBRB-1cQ",
  authDomain: "burgerking-d86a4.firebaseapp.com",
  projectId: "burgerking-d86a4",
  storageBucket: "burgerking-d86a4.appspot.com",
  messagingSenderId: "919419654264",
  appId: "1:919419654264:web:e225c0f35e393cb0eadd8d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


function App() {
  return (
    <Provider>
      <div className='container-fluid fondo'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category/:categoryId' element={<Main />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
