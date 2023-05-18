import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const useSubmit = async (e) => {
        console.clear();
        const signin = await axios.post(`/v2/admin/signin`, data);
        const { token, expired } = signin.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    };
    useEffect(() => {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("hexToken="))
            ?.split("=")[1];
        axios.defaults.headers.common["Authorization"] = token;
        (async () => {
            const productRes = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/admin/products/all`);
            console.log(productRes);
        })();
    }, []);

    return (
        <div>
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
        </div>
    );
};

export default Login;
