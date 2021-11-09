import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';

function CartItem({id, image, name, currentPrice, amount}) {

    const {cartItems, setCartItems} = useGlobalContext();
    let cartItemsCopy = [...cartItems];
    let currentCartItem = cartItemsCopy.find(item => item.id === id);
    let currentCartIndex = cartItemsCopy.indexOf(currentCartItem);

    function increaseAmont() {
        currentCartItem.amount += 1;
        cartItemsCopy[currentCartIndex] = currentCartItem;
        setCartItems(cartItemsCopy);
    }

    function decreaseAmont() {
        if (currentCartItem.amount !== 1) {
            currentCartItem.amount -= 1;
        }
        cartItemsCopy[currentCartIndex] = currentCartItem;
        setCartItems(cartItemsCopy);
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
            <img src={image} alt="img_product" />
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