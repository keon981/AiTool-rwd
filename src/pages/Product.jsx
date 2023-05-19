import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
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
        <>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ProductTable;
