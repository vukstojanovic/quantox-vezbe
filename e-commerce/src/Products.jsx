
import { useEffect, useState } from 'react';
import Product from './Product';
import useFetch from './useFetch';
import { useSearchParams } from 'react-router-dom';

function Products() {

    const {data, isLoading} = useFetch("https://fortnite-api.theapinetwork.com/items/list");
    const [chosenItems, setChosenItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({});
    let costIfZero = 25;

    function changeZeroCost() {
        costIfZero++;
        if (costIfZero === 40) {
            costIfZero = costIfZero * 2
        } else if (costIfZero === 90) {
            costIfZero = costIfZero / 2 + 100;
        }
        return costIfZero;
    }

    function filterData() {
        const search = inputValue;
        if (search) {
            setSearchParams({search});
        } else {
            setSearchParams({});
        }
    }

    useEffect(() => {
        if (!isLoading) {
            console.log(data[167].item);
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
        <>
            <div className="input-container">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={filterData}><i className="fas fa-search"></i></button>
            </div>
            <div className="grid-container">
                {chosenItems
                .filter(obj => {
                    if (searchParams.get("search")) {
                        return obj.item.name.toLowerCase().includes(searchParams.get("search"));
                    }
                    return obj;
                })
                .map(obj => {
                    const currentPrice = obj.item.cost === 0 ? changeZeroCost() : obj.item.cost;
                    return (
                        <Product 
                            key={obj.itemId}
                            id={obj.itemId} 
                            image={obj.item.images.icon} 
                            name={obj.item.name} 
                            currentPrice={currentPrice} 
                            description={obj.item.description} 
                        />
                    )
                })}
            </div>
        </>
    )

}

export default Products;
