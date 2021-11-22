
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { logout } from '../../actions/index';

function Dashboard() {

    // const {data, loading} = useFetch("http://localhost:3001/purchases");
    const [shoppingHistory, setShoppingHistory] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let accessToken = localStorage.accessToken;
        axios.get("http://localhost:3001/purchases", {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
            let refreshToken = localStorage.refreshToken;
            let token = {
                "token": refreshToken
            };
            axios.post("http://localhost:4000/token", token, {headers: {"Content-Type" : "application/json"}})
            .then(res => {
                console.log("refreshed dashboard");
                localStorage.setItem("accessToken", res.data.accessToken);
                accessToken = res.data.accessToken;
                axios.get("http://localhost:3001/purchases", {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
                .then(newResponse => {
                    console.log("renewed dashboard");
                    console.log(newResponse.data);
                })
                .catch(err => {
                    dispatch(logout());
                })
            });
        })
    }, []);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <ul>

            </ul>
        </div>
    )

}

export default Dashboard;