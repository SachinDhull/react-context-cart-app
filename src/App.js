import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop'
import Cart from './pages/Cart/Cart';
import ShopContextProvider from './context/shop-context';

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        {/* navbar here */}
        <Navbar/>
        <Routes>
          <Route path='/react-context-cart-app' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<div>Path not resolved</div>}/>
        </Routes>
      </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
