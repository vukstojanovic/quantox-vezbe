
import { createContext, useContext } from "react";
import { useState } from "react";

const NewContext = createContext();

function ContextProvider({children}) {

    const [currentDraggableItem, setCurrentDraggableItem] = useState({});

    return (
        <NewContext.Provider value={{
            currentDraggableItem,
            setCurrentDraggableItem
        }}>
            {children}
        </NewContext.Provider>
    )

}

function useGlobalContext() {
    return useContext(NewContext);
}

export {useGlobalContext, ContextProvider};









