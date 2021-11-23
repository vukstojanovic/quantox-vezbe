
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
            state = true
            return state;
        case "LOGOUT":
            state = false
            return state;
        default:
            return state;
    }

}

export default loginReducer;