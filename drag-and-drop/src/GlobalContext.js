
import { createContext, useContext } from "react";
import { useState } from "react";

const NewContext = createContext();

function ContextProvider({children}) {

    const [prevItem, setPrevItem] = useState([]);
    const [idCount, setIdCount] = useState(0);
    const [isDropped, setIsDropped] = useState(false);

    return (
        <NewContext.Provider value={{
            prevItem,
            setPrevItem,
            idCount,
            setIdCount,
            isDropped,
            setIsDropped
        }}>
            {children}
        </NewContext.Provider>
    )

}

function useGlobalContext() {
    return useContext(NewContext);
}

export {useGlobalContext, ContextProvider};









