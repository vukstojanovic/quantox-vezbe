
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function List() {

    const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
    const [list, setList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({});
    const [inputValue, setInputValue] = useState(searchParams.get("search"));

    async function fetchData(api) {
        try {
            const data = await fetch(api);
            const result = await data.json();
            setList(result);
        } catch (error) {
            return error;
        }
    }

    function handleChange(e) {
        setInputValue(e.target.value);
        const search = e.target.value;
        if (search) {
            setSearchParams({search});
        } else {
            setSearchParams({});
        }
    }

    useEffect(() => {
        fetchData(url);
        console.log(searchParams.get("search"));
    }, [url, searchParams]);
    

    return (
      <div className="list">
        <h1>List of certain Github users</h1>
        <div className="input-container">
            <input type="text" onChange={handleChange} value={inputValue ? inputValue : ""} />
            <button>Search</button>
        </div>
        {list.filter(element => {
            if (searchParams.get("search")) {
                return element.login.includes(searchParams.get("search"));
            }
            return element;
        })
        .map((item, index) => {
            const {login} = item;
            return (
                <Link key={index} to={`/list/${login}`}>
                    <h3>{login}</h3>
                </Link>
            )
        })}
      </div>
    );
  }
  
  export default List;