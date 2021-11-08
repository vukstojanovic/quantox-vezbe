import { createContext, useContext, useState } from "react";

const NewContext = createContext();

function getFromLocal() {
    let startList = [];
    if (localStorage.getItem("cartItems")) {
        startList = JSON.parse(localStorage.getItem("cartItems"));
    }
    return startList;
}

function ContextProvider({children}) {

    const [cartItems, setCartItems] = useState(getFromLocal());

    return (
        <NewContext.Provider value={{
            cartItems,
            setCartItems
        }}>
            {children}
        </NewContext.Provider>
    )

}

function useGlobalContext() {
    return useContext(NewContext);
}

export {ContextProvider, useGlobalContext};
