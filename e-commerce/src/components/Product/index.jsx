import { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

function Product({itemId, item, lastUpdate}) {

    const {cartItems, addItemToCart} = useGlobalContext();

    const {name, description, cost} = item;
    const id = itemId;
    const image = item.images.icon;

    const costIfZero = Number(lastUpdate.toString().slice(-3));
    const currentPrice = cost === 0 ? costIfZero : cost;
    const cartObject = {id, image, name, currentPrice, amount: 1};

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
                <i className="fas fa-cart-plus" onClick={() => addItemToCart(cartObject)} ></i>
            </div>
        </div>
    )

}

export default Product;