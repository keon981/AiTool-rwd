/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import axios from 'axios';

import CreateForm from './form/CreateForm';

const ModalPage = ({
  newData, hideModal, idName, type, setNewData, getProductData,
}) => {
  const handleSumbit = async (e) => {
    e.preventDefault();
    let api = `/v2/api/${import.meta.env.VITE_API_PATH}/admin/product`;
    let method = 'post';
    try {
      if (type === 'edit') {
        api = `/v2/api/${import.meta.env.VITE_API_PATH}/admin/product/${newData.id}`;
        method = 'put';
      }
      if (type === 'delete') {
        api = `/v2/api/${import.meta.env.VITE_API_PATH}/admin/product/${newData.id}`;
        method = 'delete';
      }
      // eslint-disable-next-line no-unused-vars
      const res = await axios[method](api, {
        data: newData,
      });
      hideModal();
      getProductData();
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="modal fade " id={`${idName}Modal`}>
      <section className="container modal-dialog  modal-lg">
        <form className="modal-content" method="post" onSubmit={handleSumbit}>
          {type === 'delete' ? (
            <header className="modal-header bg-danger text-light">
              <h5 className="modal-title" id="exampleModalLabel">
                {`刪除 ${newData.title}`}
              </h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={hideModal} />
            </header>
          ) : (
            <header className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {type === 'create' ? '建立新商品' : `編輯 ${newData.title}`}
              </h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={hideModal} />
            </header>
          )}

          {type === 'delete'
            ? (
              <div className="modal-body my-5">
                <p className="fs-3 text-danger">確定要刪除?</p>
              </div>
            ) : (<CreateForm newData={newData} setNewData={setNewData} />) }

          <div className={`modal-footer ${type === 'delete' && 'justify-content-center'}`}>
            {type === 'delete'
              ? (
                <>
                  <button type="button" className="btn btn-secondary" onClick={hideModal}>取消</button>
                  <button type="submit" className="btn btn-danger">確定</button>
                </>
              )
              : (
                <>
                  <button type="reset" className="btn btn-secondary">重置</button>
                  <button type="submit" className="btn btn-primary">送出</button>
                </>
              )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ModalPage;
