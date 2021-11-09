import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';

function Product({id, image, name, currentPrice, description}) {

    const {cartItems, setCartItems} = useGlobalContext();

    useEffect(() => {
        // console.log(cartItems);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    function addItemToCart() {
        const currentItem = {id: id, image: image, name: name, currentPrice: currentPrice, amount: 1};
        setCartItems(prev => {
            const ids = prev.map(item => item.id);
            if (ids.includes(currentItem.id)) {
                return prev;
            }
            return [...prev, currentItem];
        });
    }

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
                <i className="fas fa-cart-plus" onClick={addItemToCart} ></i>
            </div>
        </div>
    )

}

export default Product;