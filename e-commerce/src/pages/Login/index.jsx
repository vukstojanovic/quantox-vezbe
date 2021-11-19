
import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/index';

function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const isLogged = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (username && password) {
            let body = {
                "username": username,
                "password": password
            };

            console.log(body);

            axios.post('http://localhost:4000/login', JSON.stringify(body), {headers:{"Content-Type" : "application/json"}})
            .then(response => {
                console.log(response);
                if (response.data.accessToken && response.data.refreshToken) {
                    localStorage.setItem("accessToken", response.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    localStorage.setItem("currentUsername", username);
                    dispatch(login());
                    navigate('/');
                } else {
                    alert("Wrong username or password!");
                }
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
                <h3>Login Form</h3>
                <div className="username-container">
                    <label htmlFor="username">Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="form-btn" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    )

}

export default Login;
