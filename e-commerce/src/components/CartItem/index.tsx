
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../../actions/cartActions';
import { Link } from 'react-router-dom';

type CartItemProps = {
    id: string,
    image: string,
    name: string,
    currentPrice: number,
    amount: number
}

const CartItem: React.FC<CartItemProps> = ({id, image, name, currentPrice, amount}) => {

    const cartItems = useSelector((state: RootStateOrAny) => state.cartReducer);
    const dispatch = useDispatch();

    useEffect(() => {
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