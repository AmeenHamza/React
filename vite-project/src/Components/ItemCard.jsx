import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "../App.css";

function ItemCard() {
    const [price, setPrice] = useState(0);

    const increase = () => {
        setPrice(price + 10);
    }
    const decrease = () => {
        setPrice(price - 10);
    }
    return (
        <>
            <div className="price">
                <h1>Price = {price}</h1>


                {
                    price > 0
                        ?
                        <><button className='btn btn-primary mx-2' onClick={increase}>Add</button><button className='btn btn-primary' onClick={decrease}>Remove</button></>
                        :
                        <button className='btn btn-primary mx-2' onClick={increase}>Add to cart</button>
                }
        
            </div>
            </>
    )
}

export default ItemCard;