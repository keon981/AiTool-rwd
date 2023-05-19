import React from "react";
import ProductTable from "../Product";

const Index = () => {
    return (
        <>
            <h1 className="my-3 text-primary">Hi</h1>
            <hr />
            <section className="col-9">
                <h2>產品列表</h2>
                <ProductTable />
            </section>
        </>
    );
};

export default Index;
