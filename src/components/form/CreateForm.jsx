/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CreateForm = ({ newData, setNewData }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (['price', 'origin_price'].includes(name)) {
      setNewData((values) => ({ ...values, [name]: Number(value) }));
    } else if (name === 'is_enabled') {
      setNewData((values) => ({ ...values, [name]: +e.target.checked }));
    } else {
      setNewData((values) => ({ ...values, [name]: value }));
    }
  };
  return (
    <article className="row modal-body">
      <div className="col-12 col-lg-4">
        <div className="mb-3">
          <label htmlFor="imgUrl">輸入圖片網址</label>
          <input type="url" id="imgUrl" name="imageUrl" className="form-control" onChange={handleChange} value={newData.imageUrl} />
        </div>
        <div className="mb-3">
          <label htmlFor="imgUrl">或 上傳圖片</label>
          <input type="file" className="form-control" id="imgFile" name="imageFile" onChange={handleChange} />
        </div>
      </div>
      <main className="col-12 col-lg-8">
        <div className="mb-3">
          <label htmlFor="productsTitle">標題</label>
          <input type="text" id="productsTitle" className="form-control" name="title" onChange={handleChange} value={newData.title} />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="category">分類</label>
            <input type="text" className="form-control" placeholder="請輸入分類" id="category" name="category" onChange={handleChange} value={newData.category} />
          </div>
          <div className="col">
            <label htmlFor="unit">單位</label>
            <input type="number" className="form-control" placeholder="請輸入單位" id="unit" name="unit" onChange={handleChange} value={newData.unit} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="originPrice">原價</label>
            <input
              type="number"
              className="form-control"
              placeholder="請輸入原價"
              id="originPrice"
              name="origin_price"
              value={newData.origin_price}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="price">售價</label>
            <input type="number" className="form-control" placeholder="請輸入售價" id="price" name="price" onChange={handleChange} />
          </div>
        </div>
        <hr />
        <div className="mb-3">
          <label htmlFor="description">產品描述</label>
          <input
            type="test"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            value={newData.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content">產品說明內容</label>
          <input
            type="test"
            className="form-control"
            id="content"
            name="content"
            onChange={handleChange}
            value={newData.content}
          />
        </div>
        <div className="form-check">
          <label htmlFor="is_enabled" className="form-check-label">是否啟用</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="is_enabled"
            name="is_enabled"
            onChange={handleChange}
            checked={!!newData.is_enabled}
          />
        </div>
      </main>
    </article>
  );
};

export default CreateForm;
