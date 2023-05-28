import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="/admin">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        <li className="page-item"><Link className="page-link" to="/admin">1</Link></li>
        <li className="page-item"><Link className="page-link" to="/admin">2</Link></li>
        <li className="page-item"><Link className="page-link" to="/admin">3</Link></li>
        <li className="page-item">
          <Link className="page-link" href="/admin">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
