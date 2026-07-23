import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './components/Footer/Footer';
import mens_banner from './components/Assets/Frontend_Assets/banner_mens.png'
import womens_banner from './components/Assets/Frontend_Assets/banner_women.png'
import kids_banner from './components/Assets/Frontend_Assets/banner_kids.png'
import Breadcrum from './components/Breadcrum/Breadcrum';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men"/>}></Route>
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women"/>}></Route>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
          <Route path="/products" element={<Product/>}>
            <Route path=":productId" element={<Product/>}></Route>

          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
