
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { add } from '../../actions/cartActions';

interface ProductProps{
    itemId: string,
    item: {
        name: string,
        description: string,
        cost: number,
        images: {
            icon: string
        }
    },
    lastUpdate: number
}

const Product: React.FC<ProductProps> = ({itemId, item, lastUpdate}) => {

    const cartItems = useSelector((state: RootStateOrAny) => state.cartReducer);
    const dispatch = useDispatch();

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
            <div className="description">{description ? description : "N/A"}</div>
            <div className="basket">
                <i className="fas fa-cart-plus" onClick={() => dispatch(add(cartObject))} ></i>
            </div>
        </div>
    )

}

export default Product;