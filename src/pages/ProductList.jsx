import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Modal from '../components/ModalBtn';
import Pagination from '../components/Pagination';
import ProductTable from '../components/ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/products`);
      setProducts(res.data.products);
      setPagination(res.data.pagination);
    })();
  }, [products]);

  return (
    <section>
      <div className="d-flex justify-content-end my-2">
        <Modal title="新增商品" />
      </div>
      <ProductTable products={products} />
      <Pagination pagination={pagination} />
    </section>
  );
};

export default ProductList;
