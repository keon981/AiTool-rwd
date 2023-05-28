import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table className="table table-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">組織</th>
          <th scope="col">用途</th>
          <th scope="col">年齡</th>
          <th scope="col">性別</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.num}</th>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>{item.description}</td>
            <td>{item.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
