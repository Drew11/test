import React from 'react';
import './modal-shopping-cart.css';

const ModalShoppingCart = (props)=>{

    const {addedProducts, scooters} = props;
    const scootersName =  Object.keys(addedProducts);


    return (
        <div className={"modal-shopping-cart"}>
            <ul className={"modal-items"}>

                {scootersName.length===0?
                    <li>Sorry, products not added yet... </li>:null
                }

                {scootersName.map((name, index)=>
                    <li key={index}>
                        {`${name}: ${addedProducts[name]}
                        * ${scooters.filter(scooter=>scooter.name===name)[0].price}`}
                    </li>
                )}
            </ul>
        </div>
    )

};

export default ModalShoppingCart;