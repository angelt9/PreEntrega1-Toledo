import React from "react";
import Item from "../components/Item";

const ItemList = ({product}) => {
    
    return (
        <div>
            {
                product.map((prod)=>{
                    return(
                            <div key={prod.id}> 
                            <Item
                                id={prod.id} 
                                product={prod.product} 
                                price={prod.price}  
                                quantity={prod.quantity} />
                            </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList