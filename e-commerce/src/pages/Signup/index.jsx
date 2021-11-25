import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const {t} = useTranslation();

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
                <h3>{t("sign_up.sign_up_form")}</h3>
                <div className="username-container">
                    <label htmlFor="username">{t("sign_up.username")}: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">{t("sign_up.password")}: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="form-btn" onClick={handleSubmit}>
                    {t("sign_up.sign_up_btn")}
                </button>
            </form>
        </div>
    )

}

export default Signup;
