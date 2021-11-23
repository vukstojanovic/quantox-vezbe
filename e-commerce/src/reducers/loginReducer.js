
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
            return false;
        default:
            return state;
    }

}

export default loginReducer;