import "./style/index.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Admin from "./pages/admin/Index";
import ProductTable from "./pages/ProductTable";

const App = () => {
    const api_path = import.meta.env.VITE_API_PATH;

    useEffect(() => {
        (async () => {
            const res = await axios.get(`v2/api/${import.meta.env.VITE_API_PATH}/products/all`);
            // console.log(res);
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
