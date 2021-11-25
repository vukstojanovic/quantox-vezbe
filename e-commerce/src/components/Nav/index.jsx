
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/loginActions';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Nav() {

    const cartItems = useSelector(state => state.cartReducer);
    const isLogged = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();

    // console.log(i18n);


    console.log("isLogged is:" + isLogged + "!!!!!");
    
    function handleLogout() {
        axios.delete(`${process.env.REACT_APP_AUTH_API}/logout`, localStorage.refreshToken, {headers:{"Content-Type" : "application/json"}})
        .then(result => {
            console.log(result, "deleted token");
        })
        .catch(err => {
            console.log("problem deleting token");
        })
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(logout());
    };

    function handleChangeLanguage(language) {
        i18n.changeLanguage(language);
    }

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>{t("nav.home")}</li>
                </Link>
                <Link to="/products">
                    <li>{t("nav.our_products")}</li>
                </Link>
                <Link to="/dashboard">
                    <li>{t("nav.dashboard")}</li>
                </Link>
                <Link to="/signup">
                    <li className={isLogged ? "js-hidden" : ""}>{t("nav.sign_up_link")}</li>
                </Link>
                <Link to="/login">
                    <li className={isLogged ? "js-hidden" : ""}>{t("nav.login_link")}</li>
                </Link>
                    <li className={isLogged ? "" : "js-hidden"} onClick={handleLogout}>{t("nav.logout_link")}</li>
            </ul>
            <div className="right-side">
                <div className="languages">
                        <span onClick={() => handleChangeLanguage("sr")}>Srpski</span> | <span onClick={() => handleChangeLanguage("en")}>English</span>
                </div>
                <Link to="/cart">
                    <div className="cart-container">
                        <div className="cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                            <div className={cartItems.length > 0 && isLogged ? "red-circle" : "red-circle js-hidden"}>
                                <span>{cartItems.length}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )

}

export default Nav;


