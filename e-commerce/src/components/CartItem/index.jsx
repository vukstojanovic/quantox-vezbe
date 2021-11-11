import { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

function CartItem({id, image, name, currentPrice, amount}) {

    const {cartItems, setCartItems} = useGlobalContext();

    function increaseAmont() {
        setCartItems(prev => prev.map(item => item.id === id ? {...item, amount: item.amount + 1} : item));
    }

    function decreaseAmont() {
        setCartItems(prev => prev.map(item => item.id === id ? {...item, amount: item.amount > 1 ? item.amount - 1 : 1} : item));
    }

    function removeItem() {
        let withoutItem = cartItems.filter(item => item.id !== id);
        setCartItems(withoutItem);
    }

    useEffect(() => {
        console.log(cartItems);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    return (
        <div key={id} className="product">
            <Link to={`/products/${id}`}>
                <img src={image} alt="img_product" />
            </Link>
            <div className="name-and-price">
                <span className="name">{name}</span>
                <span className="price">Price: {currentPrice * amount}$</span>
            </div>
            <div className="amount">
                <div className="plus-minus">
                    <button className="minus" onClick={decreaseAmont}>-</button>
                    <span className="product-number">{amount}</span>
                    <button className="plus" onClick={increaseAmont}>+</button>
                </div>
                <button className="remove" onClick={removeItem}>remove</button>
            </div>
        </div>
    )

}

export default CartItem;