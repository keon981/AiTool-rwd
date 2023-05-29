/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import axios from 'axios';

import CreateForm from './form/CreateForm';

const ModalPage = ({
  newData, hideModal, idName, type, setNewData,
}) => {
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(`/v2/api/${import.meta.env.VITE_API_PATH}/admin/product`, {
        data: newData,
      });
      // console.log(' newDatat------------', res);
      hideModal();
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="modal fade " id={`${idName}Modal`}>
      <section className="container modal-dialog  modal-lg">
        <form className="modal-content" method="post" onSubmit={handleSumbit}>
          <header className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">建立新商品</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => hideModal()} />
          </header>

          {type === 'create' || type === 'edit'
            ? (<CreateForm newData={newData} setNewData={setNewData} />) : (
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
            )}

          <menu className="modal-footer">
            <button type="reset" className="btn btn-secondary">重置</button>
            <button type="submit" className="btn btn-primary">送出</button>
          </menu>
        </form>
      </section>
    </div>
  );
};

export default ModalPage;
