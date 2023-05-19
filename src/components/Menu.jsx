import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Menu = () => {
    const navigate = useNavigate();
    const logout = () => {
        document.cookie = `hexToken=;`;
        navigate(`/login`);
    };
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <Link to="/login">登入</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin">產品列表</Link>
            </li>
            <li className="list-group-item">
                <Link to="#">優惠券列表</Link>
            </li>
            <li className="list-group-item">
                <Link to="#">訂單列表</Link>
            </li>
            <li className="list-group-item">
                <button type="button" className="btn btn-primary btn-sm" onClick={logout}>
                    登出
                </button>
            </li>
        </ul>
    );
};

export default Menu;
