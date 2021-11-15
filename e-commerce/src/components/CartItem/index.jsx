
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../../actions/index';
import { Link } from 'react-router-dom';

function CartItem({id, image, name, currentPrice, amount}) {

    const cartItems = useSelector(state => state);
    const dispatch = useDispatch();

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
                    <button className="minus" onClick={() => dispatch(decrease(id))}>-</button>
                    <span className="product-number">{amount}</span>
                    <button className="plus" onClick={() => dispatch(increase(id))}>+</button>
                </div>
                <button className="remove" onClick={() => dispatch(remove(id))}>remove</button>
            </div>
        </div>
    )

}

export default CartItem;