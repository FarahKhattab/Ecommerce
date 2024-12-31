import React from "react";
import "./CartSummaryModal.css";

const CartSummaryModal = ({cartItems, isOpen, onClose }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price.current.value * item.count,
    0
  );
  const shippingFee = 20;
  const total = subtotal + shippingFee;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="cart-summary-modal"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="title">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-brand">{item.brand}</p>
              <p className="item-price">{item.price.current.text}</p>
            </div>
            <div className="item-quantity">
                    {/* <button className="quantity-btn">-</button> */}
                    <span className="quantity-text">{item.count}</span>
              {/* <button className="quantity-btn">+</button> */}
            </div>
          </div>
        ))}

        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{subtotal.toLocaleString()} USD</span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>{shippingFee.toLocaleString()} USD</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="total-price"> {total.toLocaleString()} USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryModal;
