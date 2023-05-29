import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ModalBtn from '../components/ModalBtn';
import Pagination from '../components/Pagination';
import ProductTable from '../components/ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const ObjCompare = (obj1, obj2) => (JSON.stringify(obj1) !== JSON.stringify(obj2));

  const getProductData = async () => {
    const res = await axios.get(`/v2/api/${import.meta.env.VITE_API_PATH}/products`);
    if (ObjCompare(products, res.data.products)) {
      setProducts(res.data.products);
    }
    setPagination(res.data.pagination);
  };

  // useEffect(() => {
  //   getProductData();
  // }, []);
  useEffect(() => {
    getProductData();
    console.log('products----', products);
  }, [products]);

  return (
    <section>
      <div className="d-flex justify-content-end my-2">
        <ModalBtn btnText="新增商品" idName="create" type="create" getProductData={getProductData} />
      </div>
      <ProductTable products={products} getProductData={getProductData} />
      <Pagination pagination={pagination} />
    </section>
  );
};

export default ProductList;
