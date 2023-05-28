import './style/index.scss';
import { useEffect } from 'react';

import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Admin from './pages/admin/Index';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';

const App = () => {
  const navigate = useNavigate();
  const token = document.cookie;
  axios.defaults.headers.common.Authorization = token;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!token) return navigate('/');
    (async () => {
      try {
        await axios.post('v2/api/user/check');
      } catch (err) {
        // if (!err.response.data.success) navigate(`/`);
        console.log(err);
        console.log(token);
      }
    })();
  }, [navigate, token]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {token && (
      <Route path="/admin" element={<Admin />}>
        <Route index element={<ProductList />} />
      </Route>
      )}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
