import React, { useState } from "react";
import CartSummaryModal from "./CartSummaryModal";
import "./Navbar.css";

const Navbar = ({ cart, numProductsCart }) => {
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <nav>
      <div className="container">
        <a href="#" style={{ fontWeight: 'bold' }}>BRANDS</a>
        <div className="menu">
          <a href="#">Home</a>
          <div className="dropdown">
                      <a href="#">Shop</a>
            <div className="dropdown-menu">
                <a href="#">Men's 1</a>
                <a href="#">Women's</a>
                <a href="#">kids'</a>
            </div>
          </div>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pages</a>
        </div>
        <div className="actions">
            <a href="#">Login / Register</a>
            <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6515 20.4054C20.2043 20.2902 20.5336 19.7117 20.2589 19.2183C19.6533 18.1307 18.6993 17.1749 17.4788 16.4465C15.907 15.5085 13.9812 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054V20.4054C9.39524 21.4572 14.6047 21.4572 19.6515 20.4054V20.4054Z" fill="#040404"/>
                <circle cx="12" cy="8" r="5" fill="#040404"/>
                </svg>
          </a>

          <div className="cart-icon" onClick={() => setModalOpen(true)} style={{ position: "relative", cursor: "pointer" }}>
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2787_1841)">
                <path
                  d="M7.9999 22.4002C8.88356 22.4002 9.5999 21.6839 9.5999 20.8002C9.5999 19.9165 8.88356 19.2002 7.9999 19.2002C7.11625 19.2002 6.3999 19.9165 6.3999 20.8002C6.3999 21.6839 7.11625 22.4002 7.9999 22.4002Z"
                  fill="black"
                />
                <path
                  d="M19.2001 22.4002C20.0838 22.4002 20.8001 21.6839 20.8001 20.8002C20.8001 19.9165 20.0838 19.2002 19.2001 19.2002C18.3164 19.2002 17.6001 19.9165 17.6001 20.8002C17.6001 21.6839 18.3164 22.4002 19.2001 22.4002Z"
                  fill="black"
                />
                <path
                  d="M22.4 4.00016H4.656L4 0.640163C3.9626 0.456742 3.86206 0.292245 3.71589 0.175305C3.56971 0.0583653 3.38716 -0.00361159 3.2 0.000162751H0V1.60016H2.544L5.6 16.9602C5.6374 17.1436 5.73794 17.3081 5.88411 17.425C6.03029 17.542 6.21284 17.6039 6.4 17.6002H20.8V16.0002H7.056L6.4 12.8002H20.8C20.9849 12.8047 21.1657 12.745 21.3116 12.6312C21.4574 12.5174 21.5594 12.3566 21.6 12.1762L23.2 4.97616C23.2268 4.85746 23.2262 4.73421 23.1982 4.61579C23.1702 4.49737 23.1155 4.38689 23.0384 4.29278C22.9612 4.19867 22.8636 4.12339 22.753 4.07268C22.6424 4.02198 22.5217 3.99717 22.4 4.00016ZM20.16 11.2002H6.096L4.976 5.60016H21.4L20.16 11.2002Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2787_1841">
                  <rect width="24" height="22.4002" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {numProductsCart > 0 && (
              <div className="cart-badge">
                {numProductsCart}
              </div>
            )}
          </div>
        </div>
        <button className="menu-toggle">☰</button>
      </div>

      {isModalOpen && <CartSummaryModal cartItems={cart} isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
