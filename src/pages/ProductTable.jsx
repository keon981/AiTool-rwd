import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Pagination from '../components/Pagination';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/products`);
      setProducts(res.data.products);
      setPagination(res.data.pagination);
      console.clear();
      console.log(products, pagination);
    })();
  }, []);

  return (
    <>
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">組織</th>
            <th scope="col">用途</th>
            <th scope="col">年齡</th>
            <th scope="col">性別</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <th scope="row">{item.num + 1}</th>
              <td>{item.category}</td>
              <td>{item.content}</td>
              <td>{item.description}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default ProductTable;
