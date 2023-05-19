import Link from "antd/es/typography/Link";
import React from "react";

const Menu = () => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <Link to="/admin">產品列表</Link>
            </li>
            <li className="list-group-item">
                <Link to="#">優惠券列表</Link>
            </li>
            <li className="list-group-item">
                <Link to="#">訂單列表</Link>
            </li>
        </ul>
    );
};

export default Menu;
