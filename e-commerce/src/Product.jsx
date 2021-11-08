import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';

function Product({id, image, name, cost, description}) {

    const {cartItems, setCartItems} = useGlobalContext();

    useEffect(() => {
        console.log(cartItems);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    function addItemToCart() {
        setCartItems(prev => [...prev, {id: id, image: image, name: name, cost: currentPrice}]);
    }

    const costIfZero =  25;
    const currentPrice = cost === 0 ? costIfZero : cost;

    return (
        <div className="product">
            <img src={image} alt="img_product" />
            <div className="name-and-price">
                <span className="name">{name}</span>
                <span className="price">{currentPrice}$</span>
            </div>
            <div className="description">{description}</div>
            <div className="basket">
                <i className="fas fa-cart-plus" onClick={addItemToCart} ></i>
            </div>
        </div>
    )

}

export default Product;