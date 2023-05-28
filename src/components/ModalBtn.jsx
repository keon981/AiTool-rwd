import React, { useRef } from 'react';

import { Modal } from 'bootstrap';

const ModalBtn = ({ title }) => {
  const productModal = useRef(null);
  productModal.current = new Modal('#productModal', {
    backdrop: 'static',
  });
  const showModal = () => {
    productModal.current.show();
  };
  const hideModal = () => {
    productModal.current.hide();
  };
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-primary" onClick={showModal}>
        {title}
      </button>

      {/* Modal */}
      <section className="modal fade" id="productModal">
        <div className="modal-dialog">
          <article className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={hideModal} />
            </header>
            <main className="modal-body">
              Woo
            </main>
            <menu className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </menu>
          </article>
        </div>
      </section>
    </>
  );
};

export default ModalBtn;
