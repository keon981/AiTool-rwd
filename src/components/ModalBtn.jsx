/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

import { Modal } from 'bootstrap';

import ModalPage from './ModalPage';

const ModalBtn = ({
  btnText, outLine, idName, type, productData, getProductData,
}) => {
  const productModal = useRef(null);
  const [newData, setNewData] = useState({});
  const showModal = () => {
    productModal.current.show();
    if (type === 'create') {
      setNewData({
        title: '',
        category: '',
        origin_price: 100,
        price: 300,
        unit: '',
        description: '',
        content: '',
        is_enabled: 1,
        imageUrl: '',
      });
    } else if (type === 'edit') {
      setNewData(productData);
    }
  };
  const hideModal = () => {
    productModal.current.hide();
  };

  useEffect(() => {
    productModal.current = new Modal(`#${idName}Modal`, {
      backdrop: 'static',
    });
  }, []);

  return (
    <>
      <button type="button" className={`btn ${outLine ? 'btn-outline-primary' : 'btn-primary'} m-1`} onClick={showModal}>
        {btnText}
      </button>
      <ModalPage
        setNewData={setNewData}
        newData={newData}
        hideModal={hideModal}
        idName={idName}
        type={type}
        getProductData={getProductData}
      />
    </>
  );
};

export default ModalBtn;
