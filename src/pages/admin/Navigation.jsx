import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" href="#">
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#"></Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
