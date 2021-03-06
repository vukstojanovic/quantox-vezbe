
import { useState, useEffect } from "react";
import axios from 'axios';
import React from "react";
import { logout } from "../../actions/loginActions";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

function Dashboard() {

    interface productsProps {
        id: string,
        name: string,
        amount: number
    }

    interface objectProps {
        createdAt: string,
        id: string,
        products: productsProps[]
    }

    const [shoppingHistory, setShoppingHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        setIsLoading(true);
        let accessToken = localStorage.accessToken;
        axios.get(`${process.env.REACT_APP_API}/purchases`, {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
        .then(response => {
            console.log(response.data);
            setShoppingHistory(response.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            let refreshToken = localStorage.refreshToken;
            let token = {
                "token": refreshToken
            };
            axios.post(`${process.env.REACT_APP_AUTH_API}/token`, token, {headers: {"Content-Type" : "application/json"}})
            .then(res => {
                console.log("refreshed dashboard");
                localStorage.setItem("accessToken", res.data.accessToken);
                accessToken = res.data.accessToken;
                console.log(accessToken);
                axios.get(`${process.env.REACT_APP_API}/purchases`, {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
                .then(obj => {
                    console.log("renewed dashboard");
                    console.log(obj.data);
                    setShoppingHistory(obj.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    console.log("final dashboard error");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(logout());
                })
            });
        })
    }, [dispatch]);

    if (isLoading) {
        return <h1>Dashboard loading...</h1>
    }

    return (
        <div className="dashboard">
            <div className="dashboard-table">
                <div className="header">{t("dashboard.order_id")}</div>
                <div className="header">{t("dashboard.order_date")}</div>
                <div className="header">{t("dashboard.product_names")}</div>
                <div className="header">{t("dashboard.product_amount")}</div>
                {shoppingHistory.map(object => {
                    const {createdAt, id, products}: objectProps = object;
                    return (
                        <React.Fragment key={id}>
                            <div className="col">{id}</div>
                            <div className="col">{createdAt}</div>
                            <div className="col">
                                {products.map(product => {
                                    return <div key={product.id} className="col-name">{product.name}</div>
                                })}
                            </div>
                            <div className="col">
                                {products.map(product => {
                                    return <div key={product.id} className="col-amount">{product.amount}</div>
                                })}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )

}

export default Dashboard;