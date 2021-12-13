import { useEffect, useState } from "react";



function useFetch(url: string) {

    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData(api: string) {
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