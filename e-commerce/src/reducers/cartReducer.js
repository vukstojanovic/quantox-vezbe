
function initState() {
    let startList = [];
    if (localStorage.getItem("cartItems")) {
        startList = JSON.parse(localStorage.getItem("cartItems"));
    }
    return startList;
}

function cartReducer(state = initState(), action) {

    switch(action.type) {
        case "ADD":
            const ids = state.map(item => item.id);
            if (ids.includes(action.payload.id)) {
                return state;
            }
            return [...state, action.payload];
            break;
        case "INCREASE":
            return state.map(item => item.id === action.payload ? {...item, amount: item.amount + 1} : item);
            break;
        case "DECREASE":
            return state.map(item => item.id === action.payload ? {...item, amount: item.amount > 1 ? item.amount - 1 : 1} : item);
            break;
        case "REMOVE":
            return state.filter(item => item.id !== action.payload);
            break;
        case "EMPTY":
            return [];
            break;
        default:
            return state;
    }

}

export default cartReducer;
