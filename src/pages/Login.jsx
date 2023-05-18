import axios from "axios";
import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        userName: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const useSubmit = async (e) => {
        const signin = await axios.post(`/v2/admin/signin`, data);
        const productRes = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/admin/products/all`);
        console.log(`data`, data, `signin`, signin);
        e.preventDefault();
    };
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Email address
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
                    Password
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
        </form>
    );
};

export default Login;
