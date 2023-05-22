import React from "react";
import ProductTable from "../ProductTable";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Menu from "../../components/Menu";

const Index = () => {
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
    axios.defaults.headers.common["Authorization"] = token;

    return (
        <div className="container-fluid">
            <h1 className="my-3 text-primary">產品列表</h1>
            <hr />
            <section className="row">
                <div className="col-3 p-0 pt-5 vh-100">
                    <Menu/>
                </div>
                <main className="col-9">
                    <Outlet />
                </main>
            </section>
        </div>
    );
};

export default Index;
