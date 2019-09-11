import React from 'react';
import './modal-shopping-cart.css';

const ModalShoppingCart = (props)=>{

    const {addedProducts, scooters, removeProduct} = props;
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

                        Total: {addedProducts[name] * scooters.filter(scooter=>scooter.name===name)[0].price}

                        <button className={"remove-item"}
                            onClick={()=>{removeProduct(name)}}
                        >Remove item
                        </button>

                    </li>
                )}

            </ul>
        </div>
    )

};

export default ModalShoppingCart;