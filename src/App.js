import Layout from './components/Layout';
import Home from "./pages/Home";
import Checkout from './pages/CheckoutPage';
import Contact from "./pages/ContactPage";
import CheckoutSuccess from './pages/CheckoutSuccessPage';
import SingleProduct from './pages/ProductPage';
import PageNotFound from './pages/Page404';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
