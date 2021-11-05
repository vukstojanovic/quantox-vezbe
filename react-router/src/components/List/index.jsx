
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {

    const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

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
        // const filteredList  = list.filter(element => element.login.includes(inputValue));
        // setList(prev => filteredList);
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return (
      <div className="list">
        <h1>List of certain Github users</h1>
        <div className="input-container">
            <input type="text" onChange={handleChange} value={inputValue} />
            <button>Search</button>
        </div>
        {list.filter(element => element.login.includes(inputValue)).map((item, index) => {
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