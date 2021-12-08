import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { add } from '../../actions/cartActions';

function ProductDetails() {

    const cartItems = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const specificProductApi = `https://fortnite-api.theapinetwork.com/item/get?id=${id}`;

    const {data, isLoading} = useFetch(specificProductApi);

    useEffect(() => {
        if (!isLoading) {
            console.log(data)
        }
    }, [data, isLoading, cartItems]);

    useEffect(() => {
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    if (isLoading) {
        return <h1>Loading...</h1>
    } else {
        console.log(data.item);
        const {name, cost, description, rarity, series} = data.item;
        const image = data.item.images.icon;
        const currentPrice = cost === 0 ? Number(data.lastUpdate.toString().slice(-3)) : cost;
        const cartObject = {id, image, name, currentPrice, amount: 1};
        return (
            <div className="product-details">
                <img src={image} alt="img_product" />
                <div className="text-details">
                    <p><span>Name:</span> <br/> {name}</p>
                    <p><span>Price:</span> <br/> {currentPrice}$</p>
                    <p><span>Description:</span> <br/> {description ? description : "N/A"}</p>
                    <p><span>Rarity:</span> <br/> {rarity}</p>
                    <p><span>Series:</span> <br/> {series ? series : "N/A"}</p>
                    <div className="basket">
                        <i className="fas fa-cart-plus" onClick={() => dispatch(add(cartObject))}></i>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductDetails;