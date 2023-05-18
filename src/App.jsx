import { useEffect } from "react";
import axios from "axios";
import "./style/index.scss";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
    const api_path = import.meta.env.VITE_API_PATH;

    useEffect(() => {
        (async () => {
            const res = await axios.get(`v2/api/${import.meta.env.VITE_API_PATH}/products/all`);
            // console.log(res);
        })();
    }, []);

    return (
        <div className="container ">
            <h1 className="mt-3 text-primary">Hi</h1>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
