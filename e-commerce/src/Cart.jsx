import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';

function Cart({obj}) {

    const {cartItems, setCartItems} = useGlobalContext();

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <div className="cart">
            <h2>Your shopping cart</h2>
            <div className="cart-products">
                {cartItems.map(item => {
                    const {id, image, name, currentPrice} = item;
                    return (
                        <div key={id} className="product">
                            <img src={image} alt="img_product" />
                            <div className="name-and-price">
                                <span className="name">{name}</span>
                                <span className="price">{currentPrice}$</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="bottom-cart">
                <div className="total"></div>
                <div className="buttons">
                    <button className="empty">empty cart</button>
                    <button className="checkout">checkout</button>
                </div>
            </div>
        </div>
    )

}

export default Cart;