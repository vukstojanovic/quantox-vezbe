import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { useGlobalContext } from './GlobalContext';
import useFetch from './useFetch';

function ProductDetails() {

    const {cartItems, setCartItems} = useGlobalContext();
    const {id} = useParams();
    const specificItemApi = `https://fortnite-api.theapinetwork.com/item/get?id=${id}`;

    console.log(id);

    const {data, loading} = useFetch(specificItemApi);

    useEffect(() => {
        // console.log(cartItems);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [specificItemApi]);

    // function addItemToCart() {
    //     const currentItem = {id: id, image: image, name: name, currentPrice: currentPrice, amount: 1};
    //     setCartItems(prev => {
    //         const ids = prev.map(item => item.id);
    //         if (ids.includes(currentItem.id)) {
    //             return prev;
    //         }
    //         return [...prev, currentItem];
    //     });
    // }

    return (
        <div className="product-details">
            <h1>Yaaay details!</h1>
        </div>
    )

}

export default ProductDetails;