import './style/index.scss';
import { useEffect } from 'react';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Admin from './pages/admin/Index';
import Login from './pages/Login';
import ProductTable from './pages/ProductTable';

const App = () => {
  const api_path = import.meta.env.VITE_API_PATH;
  useEffect(() => {
    (async () => {
      const res = await axios.get(`v2/api/${api_path}/products/all`);
      console.log(res);
    })();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<ProductTable />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
