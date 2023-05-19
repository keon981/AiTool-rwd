import "./style/index.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Admin from "./pages/admin/Index";
import Menu from "./components/Menu";

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 p-0 pt-5 vh-100">
                        <Menu />
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/admin" element={<Admin />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
