import React from "react";
const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {}
  return (
    <nav>
      <ul className="pagination left">
        {pageNumber.map(number => (
          <li key={number} active className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
