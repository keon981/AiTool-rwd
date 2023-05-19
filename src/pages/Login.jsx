import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const useSubmit = async (e) => {
        const signin = await axios.post(`/v2/admin/signin`, data);
        const { token, expired } = signin.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        if (signin.data.success) return navigate(`/admin`);
        console.log(`signin*******************`, signin);
    };

    return (
        <>
            <h1 className="my-3 text-primary">Login</h1>
            <hr />
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
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div class="mb-3">
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
        </>
    );
};

export default Login;
