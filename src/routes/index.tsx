import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
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
    <Route path='*' element={<Home />} />
  </Routes>
);
