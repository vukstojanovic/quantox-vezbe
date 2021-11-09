import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';

function Product({id, image, name, currentPrice, description}) {

    const {cartItems, addItemToCart} = useGlobalContext();

    useEffect(() => {
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    return (
        <div className="product">
            <Link to={`/products/${id}`}>
                <img src={image} alt="img_product" />
            </Link>
            <div className="name-and-price">
                <span className="name">{name}</span>
                <span className="price">{currentPrice}$</span>
            </div>
            <div className="description">{description}</div>
            <div className="basket">
                <i className="fas fa-cart-plus" onClick={() => addItemToCart(id, image, name, currentPrice)} ></i>
            </div>
        </div>
    )

}

export default Product;