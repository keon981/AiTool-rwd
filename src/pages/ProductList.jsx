import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ModalBtn from '../components/ModalBtn';
import Pagination from '../components/Pagination';
import ProductTable from '../components/ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  // const [productData, setProductData] = useState([]);

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
        <ModalBtn btnText="新增商品" idName="create" type="create" />
      </div>
      <ProductTable products={products} />
      <Pagination pagination={pagination} />
    </section>
  );
};

export default ProductList;
