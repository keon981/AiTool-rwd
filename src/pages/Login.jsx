import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const [loginState, setLoginState] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const useSubmit = async () => {
    try {
      const signin = await axios.post(`/v2/admin/signin`, data);
      const { token, expired } = signin.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      if (signin.data.success) return navigate(`/admin`);
    } catch (error) {
      console.log(error);
      setLoginState(error.response.data);
    }
  };

  return (
    <>
      <h1 className="my-3 text-primary text-center">Login</h1>
      <hr />
      <div className={`alert alert-danger ${loginState.message ? `d-block` : `d-none`}`} role="alert">
        錯誤
      </div>
      <section className="mx-auto mt-5 w-50 p-5 border rounded">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            帳號
          </label>
          <input
            type="email"
            className="form-control"
            name="username"
            id="username"
            placeholder="email Address"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            密碼
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={useSubmit}>
          Submit
        </button>
      </section>
    </>
  );
};

export default Login;
