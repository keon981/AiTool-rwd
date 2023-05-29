/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';

import { Modal } from 'bootstrap';

import ModalPage from './ModalPage';

const ModalBtn = ({ btnText, outLine, idName }) => {
  const productModal = useRef(null);
  const showModal = () => {
    productModal.current.show();
  };
  const hideModal = () => {
    productModal.current.hide().dispose();
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
      <ModalPage hideModal={hideModal} idName={idName} />
    </>
  );
};

export default ModalBtn;
