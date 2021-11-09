import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';

function Cart() {

    const {cartItems, setCartItems} = useGlobalContext();
    const [total, setTotal] = useState(0);
    let sum = 0;

    function emptyCart() {
        setCartItems([]);
    }

    useEffect(() => {
        // console.log(cartItems);
        cartItems.forEach(item => {
            sum += item.currentPrice * item.amount;
        });
        setTotal(sum);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>
                    Your cart is currently empty. <br/>
                    <Link to="/products">Go back and pick some products.</Link>
                </h2>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2>Your shopping cart</h2>
            <p>Item types: {cartItems.length}, Total number: {cartItems.map(item => item.amount).reduce((prev, next) => prev + next)}</p>
            <div className="cart-products">
                {cartItems.map(item => {
                    const {id} = item;
                    return (
                        <CartItem 
                            key={id} 
                            {...item} 
                        />
                    )
                })}
            </div>
            <div className="bottom-cart">
                <div className="total">Subtotal: {total} $</div>
                <div className="buttons">
                    <button className="empty" onClick={emptyCart}>empty cart</button>
                    <Link to="/products">
                        <button className="checkout">checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Cart;