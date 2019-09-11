import React from 'react';
import './shopping-cart.css';

const ShoppingCart = (props) => {

    const {addedProducts, switchModal} = props;
    const totalProducts = Object.values(addedProducts).reduce((acum, current)=> acum + current,0);

    return (
            <div className={"shopping-cart"}>
                <i  onClick={switchModal}
                    className="material-icons">
                    shopping_cart
                </i>
                <span>Total Products: {`(${totalProducts})`}</span>

            </div>
    );
};

export default ShoppingCart;

// const scooters = Object.keys(addedProducts);
/*// {scooters.map(scooter=><div>{`${scooter}: ${addedProducts[scooter]}`}</div>)*/