
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {login} = useParams();
    console.log(login);
    const [user, setUser] = useState({});
    const url = `https://api.github.com/users/${login}`;

    async function fetchData(api) {
      try {
          const data = await fetch(api);
          const result = await data.json();
          setUser(result);
      } catch (error) {
          return error;
      }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return (
      <div className="user">
        <img src={user.avatar_url} alt={user.avatar_url} />
        <h1>{user.login}</h1>
      </div>
    );
  }
  
  export default User;