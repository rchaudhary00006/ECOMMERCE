import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";

const ProductDetail = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=image`
    );
    console.log(productResponse);
    if (productResponse.data.data.length > 0) {
      setSingleProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  if (!singleProduct) {
    return <Loader/>;
  }
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img">
            <div className="img-container">
              <img
                src={singleProduct?.attributes.image.data.attributes.url}
                alt={singleProduct?.attributes.title}
              />
            </div>
          </div>
          <div className="product-info">
            <h1 className="heading">{singleProduct?.attributes.title}</h1>
            <h3 className="price">₹ {singleProduct?.attributes.price}</h3>
            <p className="description">{singleProduct?.attributes.desc}</p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
