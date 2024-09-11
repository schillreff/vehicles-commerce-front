import { Route, Routes } from 'react-router-dom';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Product } from '../pages/Product';
import { RecoverPassword } from '../pages/RecoverPassword';
import { Register } from '../pages/Register';
import { Seller } from '../pages/Seller';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/reset-password' element={<RecoverPassword />} />
    <Route path='/seller' element={<Seller />} />
    <Route path='/product' element={<Product />} />
    <Route path='*' element={<Error404 />} />
  </Routes>
);
