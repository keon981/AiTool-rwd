import React from 'react';

import ModalBtn from '../components/ModalBtn';
import Pagination from '../components/Pagination';
import ProductTable from '../components/ProductTable';

const Coupons = () => {
  return (
    <section>
      <div className="d-flex justify-content-end my-2">
        <ModalBtn btnText="新增商品" idName="create" type="create" />
      </div>
      <ProductTable products={undefined} />
      <Pagination pagination={[]} />
    </section>
  );
};

export default Coupons;
