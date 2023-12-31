import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product  from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Sucess from "./pages/Sucess"
import {  Routes, Route , Navigate} from "react-router-dom";


 

function App() {
  const user =true;
  return (
    <>
     <Routes >
         <Route  path="/" element={<Home/>} />
         <Route  path="/products/:category" element={<ProductList/>} />
         <Route  path="/product/:id" element={<Product/>} />
         <Route  path="/cart" element={<Cart/>}/>
         <Route  path="/sucess" element={ <Sucess/> }/>
         <Route  path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
         <Route  path="/register" element={user ? <Navigate to="/"/> : <Register/>} />  
       </Routes>
    </>
  );
}

export default App;
