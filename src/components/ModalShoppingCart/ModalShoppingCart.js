import React from 'react';
import './modal-shopping-cart.css';

const ModalShoppingCart = (props)=>{

    const {addedProducts} = props;
    const scooters =  Object.keys(addedProducts);

    return (
        <div className={"modal-shopping-cart"}>
            <ul className={"modal-items"}>

                {scooters.length===0?
                    <li>Sorry, products not added yet... </li>:null
                }

                {scooters.map((scooter, index)=>
                    <li key={index}>
                        {`${scooter}: ${addedProducts[scooter]}`}
                    </li>
                )}
            </ul>
        </div>
    )

};

export default ModalShoppingCart;