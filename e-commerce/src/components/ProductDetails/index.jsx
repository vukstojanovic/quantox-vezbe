import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGlobalContext } from '../../context/GlobalContext';
import useFetch from '../../hooks/useFetch';

function ProductDetails() {

    const {cartItems, addItemToCart} = useGlobalContext();
    const {id} = useParams();
    const specificProductApi = `https://fortnite-api.theapinetwork.com/item/get?id=${id}`;

    console.log(id);

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
        const price = cost === 0 ? Number(data.lastUpdate.toString().slice(-3)) : cost;
        return (
            <div className="product-details">
                <img src={image} alt="img_product" />
                <div className="text-details">
                    <p><span>Name:</span> <br/> {name}</p>
                    <p><span>Price:</span> <br/> {price}$</p>
                    <p><span>Description:</span> <br/> {description}</p>
                    <p><span>Rarity:</span> <br/> {rarity}</p>
                    <p><span>Series:</span> <br/> {series ? series : "N/A"}</p>
                    <div className="basket">
                        <i className="fas fa-cart-plus" onClick={() => addItemToCart(id, image, name, price)}></i>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductDetails;