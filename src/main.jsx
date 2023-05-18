import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import { HashRouter } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
