
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import useFetch from './useFetch';

function Products() {

    const {data, isLoading} = useFetch("https://fortnite-api.theapinetwork.com/items/list");
    const [chosenItems, setChosenItems] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            console.log(data[0].item);
            const items = [...data.slice(167, 187), ...data.slice(300, 325), ...data.slice(333, 348), ...data.slice(415, 421), ...data.slice(522, 532), ...data.slice(600, 616),  ...data.slice(676, 690), ...data.slice(1100, 1128), ...data.slice(1135, 1200)];
            setChosenItems(items);
        }
    }, [isLoading]);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <main>
            <div className="grid-container">
                {chosenItems.map(obj => {
                    return (
                    <Product 
                        key={obj.itemId}
                        id={obj.itemId} 
                        image={obj.item.images.icon} 
                        name={obj.item.name} 
                        cost={obj.item.cost} 
                        description={obj.item.description} 
                    />
                    )
                })}
            </div>
        </main>
    )

}

export default Products;











