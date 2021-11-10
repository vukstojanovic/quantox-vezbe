import { useEffect, useState } from "react";



function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData(api) {
        try {
            const dataList = await fetch(api);
            const result = await dataList.json();
            setData(result.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return {
        data, 
        isLoading
    }
}

export default useFetch;