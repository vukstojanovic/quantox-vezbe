
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
            const items = [...data.slice(174, 187), ...data.slice(302, 334), ...data.slice(342, 348), ...data.slice(522, 541), ...data.slice(605, 616),  ...data.slice(685, 703), ...data.slice(1100, 1135), ...data.slice(1138, 1213)];
            setChosenItems(items);
            // console.log(items);
            console.log(...data.slice(1090, 1128));
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
                    return (
                        <Product 
                            key={obj.itemId}
                            {...obj}
                        />
                    )
                })}
            </div>
        </>
    )

}

export default Products;
