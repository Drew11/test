import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.css';

const  Header  = (props) => {
    const { addedProducts, switchModal } = props;

    return (
      <div className="Header-container">

        <span className="Header-title">E-scooter Emporium</span>
        <img src="./assets/logo.png" className="Header-logo" alt="logo" />


        <div className={"shopping-cart-container"}>
          <ShoppingCart
              addedProducts={addedProducts}
              switchModal={switchModal}
          />
        </div>

      </div>
    );

};

export default Header;
