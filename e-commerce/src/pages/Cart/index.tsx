import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/index';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { empty } from '../../actions/cartActions';
import { logout } from '../../actions/loginActions';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Cart() {

    interface CartItemsProps {
        id: string,
        image: string,
        name: string,
        currentPrice: number,
        amount: number
    }
    

    const cartItems: CartItemsProps[] = useSelector((state: RootStateOrAny) => state.cartReducer);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const {t} = useTranslation();

    useEffect(() => {
        let sum = 0;
        cartItems.forEach(item => {
            sum += item.currentPrice * item.amount;
        });
        setTotal(sum);
        const stringified = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", stringified);
    }, [cartItems]);

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>
                    {t("cart.empty_message")}<br/>
                    <Link to="/products">{t("cart.empty_message_link")}</Link>
                </h2>
            </div>
        )
    }

    function sendOrder() {

        let body = {
            "products": cartItems
        }

        let accessToken = localStorage.accessToken;
        axios.post(`${process.env.REACT_APP_API}/purchases`, JSON.stringify(body), {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
        .then(response => {
            console.log("Order sent");
            dispatch(empty());
        })
        .catch(err => {
            console.log("error happened");
            let refreshToken = localStorage.refreshToken;
            let token = {
                "token": refreshToken
            };
            axios.post(`${process.env.REACT_APP_AUTH_API}/token`, token, {headers: {"Content-Type" : "application/json"}})
            .then(res => {
                console.log("refreshed");
                localStorage.setItem("accessToken", res.data.accessToken);
                accessToken = res.data.accessToken;
                axios.post(`${process.env.REACT_APP_API}/purchases`, JSON.stringify(body), {headers: {"authorization": `Bearer ${accessToken}`, "Content-Type" : "application/json"}})
                .then(newResponse => {
                    console.log("order sent");
                    dispatch(empty());
                })
                .catch(err => {
                    console.log("another error");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(logout());
                })
            });
        })

    }

    return (
        <div className="cart">
            <h2>{t("cart.heading")}</h2>
            <p>{t("cart.item_types")}: {cartItems.length}, {t("cart.total_number")}: {cartItems.map(item => item.amount).reduce((prev, next) => prev + next)}</p>
            <div className="cart-products">
                {cartItems.map(item => {
                    const {id} = item;
                    return (
                        <CartItem 
                            key={id} 
                            {...item} 
                        />
                    )
                })}
            </div>
            <div className="bottom-cart">
                <div className="total">{t("cart.subtotal")}: {total} $</div>
                <div className="buttons">
                    <button className="empty" onClick={() => dispatch(empty())}>{t("cart.empty_cart")}</button>
                    <button className="checkout" onClick={sendOrder}>{t("cart.buy")}</button>
                </div>
            </div>
        </div>
    )

}

export default Cart;