import React, { useEffect } from 'react';

import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';

import Menu from '../../components/Menu';

const Index = () => {
  const navigate = useNavigate();
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    ?.split('=')[1];
  axios.defaults.headers.common['Authorization'] = token;
  useEffect(() => {}, [navigate, token]);
  return (
    <div className="container-fluid">
      <h1 className="my-3 text-primary">產品列表</h1>
      <hr />
      <section className="row">
        <div className="col-3 p-0 pt-5 vh-100">
          <Menu />
        </div>
        <main className="col-9">
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default Index;
