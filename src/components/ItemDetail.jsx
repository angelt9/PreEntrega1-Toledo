import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ prods }) => {
    const { id } = useParams();
    const ProdFilter = prods.filter((prod) => prod.id == id);

    function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
    }

    return (
    <div>
        {ProdFilter.map((prod) => {
        return (
            <div key={prod.id}>
            <div>
                <h5>{prod.product}</h5>
                <p>
                ${formatNumber(prod.price)}
                </p>
                <p>Categoria: {prod.category}</p>
                <p>Stock: {prod.quantity}</p>
                <p>Descripción: {prod.description}</p>
                <ItemCount stock={prod.quantity} />
                <Link to={"/cart"}>
                <button>
                    Agregar al carrito
                    </button>
                </Link>
            </div>
            </div>
        );
        })}
    </div>
    );
};

export default ItemDetail;
