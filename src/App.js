import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from'./Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
// import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          
          <Route path='/Product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          
          <Route path='/Mens' element={<ShopCategory banner={men_banner} category='men'/>}></Route>
          <Route path='/Womens' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
          <Route path='/Kids' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route>
          

          <Route path='LoginSignUp' element={<LoginSignUp/>}></Route>

          <Route path='Cart' element={<Cart/>}></Route>
          
        </Routes>
        
        

        <Footer/>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
