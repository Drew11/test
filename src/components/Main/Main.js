import React from "react";
import ModalShoppingCart from '../ModalShoppingCart/ModalShoppingCart';
import './Main.css';

const Main  = (props) => {

    const {
        scooters,
        isActiveModal,
        addedProducts,
        addProduct
    } = props;

        return (
                <div className="App-main">

                    {isActiveModal ?
                        <ModalShoppingCart
                            addedProducts={addedProducts}
                        />
                        :
                        null}

                    {
                        scooters.map((scooter, index)=>

                            <div key={index}
                                className={"scooter"}
                            >
                                <img src={`./${scooter.image}`} alt=""/>
                                <div className={"scooter-right-section"}
                                >
                                    <span>{scooter.name}</span>
                                    <span>${scooter.price}</span>

                                    <button
                                        className={"scooter-add"}
                                        onClick={()=>
                                            addProduct(scooter.id)

                                        }
                                    >
                                        Add</button>
                                </div>

                            </div>

                        )}
                </div>

        );

};

export default Main;
