import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (username && password) {
            let body = {
                "username": username,
                "password": password
            };

            axios.post(`${process.env.REACT_APP_API}/users`, JSON.stringify(body), {headers:{"Content-Type" : "application/json"}})
            .then(response => {
                console.log(response);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                alert("There's a problem with username or password");
            })

        }
    }

    return (
        <div className="form-container">
            <form action="">
                <h3>Sign Up Form</h3>
                <div className="username-container">
                    <label htmlFor="username">Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="form-btn" onClick={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    )

}

export default Signup;
