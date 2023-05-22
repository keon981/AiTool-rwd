import React, { useEffect } from 'react';

import axios from 'axios';

const ProductTable = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/products/all`);
      console.log(res);
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
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
