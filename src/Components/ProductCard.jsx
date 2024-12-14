import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-header">
        {/* <span className="sale-badge">Sale</span> */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-card-body">
        <span className="department">{product.brandName}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="price">
          {product.price.previous.value && (
            <span className="original-price">{product.price.previous.text}</span>
          )}
          <span className="discounted-price">{product.price.current.text}</span>
        </div>
        <div className="color-options">
            {/* <span
                className="color"
                style={{ backgroundColor: product.colour }}
            ></span> */}
        </div>
        <button className="learn-more-btn">Add to cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalImageUrls: PropTypes.arrayOf(PropTypes.string),
    colour: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.shape({
      current: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      previous: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
