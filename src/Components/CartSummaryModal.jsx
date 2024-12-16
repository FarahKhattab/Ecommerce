import React from "react";
import "./CartSummaryModal.css";

const CartSummaryModal = ({cartItems, isOpen, onClose }) => {
  if (!isOpen) return null;

//   const cartItems = [
//     {
//       id: 1,
//       name: "Kitten Thin Slices Canned Food",
//       quantity: 3,
//       price: 100000,
//       weight: "3OZ",
//       imageUrl:
//         "https://images.asos-media.com/products/timberland-britton-road-mid-chelsea-boot-in-brown/206310472-1-brown",
//     },
//     {
//       id: 2,
//       name: "Hairballs Boules Dryfood",
//       quantity: 6,
//       price: 1340000,
//       weight: "3KG",
//       imageUrl:
//         "https://images.asos-media.com/products/timberland-britton-road-mid-chelsea-boot-in-brown/206310472-1-brown",
//     },
//     {
//       id: 3,
//       name: "Weight Care Adult Dry Cat Food",
//       quantity: 1,
//       price: 140000,
//       weight: "1KG",
//       imageUrl:
//         "https://images.asos-media.com/products/timberland-britton-road-mid-chelsea-boot-in-brown/206310472-1-brown",
//     },
//     {
//       id: 4,
//       name: "Maine Coon Adult Thin Slices in Gravy",
//       quantity: 1,
//       price: 94000,
//       weight: "3OZ",
//       imageUrl:
//         "https://images.asos-media.com/products/timberland-britton-road-mid-chelsea-boot-in-brown/206310472-1-brown",
//     },
//   ];

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

  const shippingFee = 34000;
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
          {/* <div className="summary-row">
            <span>Subtotal</span>
            <span>Rp{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>Rp{shippingFee.toLocaleString()}</span>
          </div> */}
          <div className="summary-row total">
            <span>Total</span>
            <span className="total-price">Rp 1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryModal;
