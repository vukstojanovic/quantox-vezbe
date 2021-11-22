
import axios from 'axios';

function initState() {
    let initState = false;
    if (localStorage.getItem("accessToken")) {
        initState = true;
    }
    console.log(localStorage.getItem("accessToken"));
    return initState;
}

function loginReducer(state = initState(), action) {

    switch (action.type) {
        case "LOGIN":
            return true;
        case "LOGOUT":
            axios.delete("http://localhost:4000/logout", localStorage.refreshToken, {headers:{"Content-Type" : "application/json"}});
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            return false;
        default:
            return state;
    }

}

export default loginReducer;