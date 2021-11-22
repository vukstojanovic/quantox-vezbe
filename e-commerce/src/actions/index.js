

function add(itemObject) {
    return {
        type: "ADD",
        payload: itemObject
    }
}

function empty() {
    return {
        type: "EMPTY"
    }
}

function increase(id) {
    return {
        type: "INCREASE",
        payload: id
    }
}

function decrease(id) {
    return {
        type: "DECREASE",
        payload: id
    }
}

function remove(id) {
    return {
        type: "REMOVE",
        payload: id
    }
}

function login() {
    return {
        type: "LOGIN"
    }
}

function logout() {
    return {
        type: "LOGOUT"
    }
}

export {add, empty, increase, decrease, remove, login, logout}