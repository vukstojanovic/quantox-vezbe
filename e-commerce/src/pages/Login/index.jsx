
import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/loginActions';
import { useTranslation } from 'react-i18next';

function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {t} = useTranslation();

    function handleSubmit(e) {
        e.preventDefault();
        if (username && password) {
            let body = {
                "username": username,
                "password": password
            };

            axios.post(`${process.env.REACT_APP_AUTH_API}/login`, JSON.stringify(body), {headers:{"Content-Type" : "application/json"}})
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
                <h3>{t("login.login_form")}</h3>
                <div className="username-container">
                    <label htmlFor="username">{t("login.username")}: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">{t("login.password")}: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="form-btn" onClick={handleSubmit}>
                    {t("login.login_btn")}
                </button>
            </form>
        </div>
    )

}

export default Login;
