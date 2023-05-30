import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = ({ pagination, getProductData }) => {
  const totalPages = pagination.total_pages;
  const currentPage = pagination.current_page;
  const nextPage = () => {
    getProductData(currentPage + 1);
  };
  const lastPage = () => {
    getProductData(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className={`page-link ${pagination.has_pre || 'disabled'}`} to="/admin" onClick={lastPage}>
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {
        [...new Array(totalPages)].map((item, index) => (
          <li className="page-item">
            <Link
              className={`page-link ${index + 1 === currentPage && 'active'}`}
              to="/admin"
              onClick={(e) => {
                // eslint-disable-next-line no-unused-expressions
                e.preventDefault;
                getProductData(index + 1);
              }}
            >
              {index + 1}
            </Link>
          </li>
        ))
}

        <li className="page-item">
          <Link className={`page-link ${pagination.has_next || 'disabled'}`} href="/admin" onClick={nextPage}>
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
