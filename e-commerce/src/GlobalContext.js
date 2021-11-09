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

    function addItemToCart(someId, someImg, someName, somePrice) {
        const currentItem = {id: someId, image: someImg, name: someName, currentPrice: somePrice, amount: 1};
        setCartItems(prev => {
            const ids = prev.map(item => item.id);
            if (ids.includes(currentItem.id)) {
                return prev;
            }
            return [...prev, currentItem];
        });
    }

    return (
        <NewContext.Provider value={{
            cartItems,
            setCartItems,
            addItemToCart
        }}>
            {children}
        </NewContext.Provider>
    )

}

function useGlobalContext() {
    return useContext(NewContext);
}

export {ContextProvider, useGlobalContext};
