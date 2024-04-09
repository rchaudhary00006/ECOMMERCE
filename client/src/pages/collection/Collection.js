import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//fish shell
const Collection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector(
    (state) => state.categorySliceReducer.categories
  );

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }
  useEffect(() => {
    setCategoryId(params.categoryId);
    //api call
  }, [params.categoryId]);
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h3>Explore All Print and Artwork</h3>
            <p>
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
          </div>

          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select className="select-sort-by" name="sort-by" id="sort-by">
                <option value="relevance">Relevance</option>
                <option value="newest-first">Newest First</option>
                <option value="price-lth">Price - Low To High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item, index) => (
                <div className="filter-radio" key={index}>
                  <input
                    type="radio"
                    name="category"
                    id={item.id}
                    value={item.attributes.key}
                    onChange={updateCategory}
                    checked={item.attributes.key == categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
