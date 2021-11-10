
import { useEffect, useState } from 'react';
import Product from '../../components/Product/index';
import useFetch from '../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

function Products() {

    const {data, isLoading} = useFetch("https://fortnite-api.theapinetwork.com/items/list");
    const [chosenItems, setChosenItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({});

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
            console.log(data[183].item);
            const items = [...data.slice(167, 187), ...data.slice(300, 325), ...data.slice(333, 348), ...data.slice(415, 421), ...data.slice(522, 532), ...data.slice(600, 616),  ...data.slice(676, 690), ...data.slice(1100, 1128), ...data.slice(1135, 1200)];
            setChosenItems(items);
        }
    }, [data, isLoading]);

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
                    // const costIfZero = Number(obj.lastUpdate.toString().slice(-3));
                    // const currentPrice = obj.item.cost === 0 ? costIfZero : obj.item.cost;
                    return (
                        <Product 
                            key={obj.itemId}
                            {...obj}
                            // id={obj.itemId} 
                            // image={obj.item.images.icon} 
                            // name={obj.item.name} 
                            // currentPrice={currentPrice} 
                            // description={obj.item.description} 
                        />
                    )
                })}
            </div>
        </>
    )

}

export default Products;
