
import React, {createContext, useContext, useState} from 'react';


const NewContext = createContext();

const ContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [showFinal, setShowFinal] = useState(false);
    const [totalMoney, setTotalMoney] = useState(89914);
    const [bambooStand, setBambooStand] = useState(101);
    const [blackEditionStand, setBlackEditionStand] = useState(64);
    const [mahagonySpecialEdition, setMahagonySpecialEdition] = useState(0);
    const [totalBackers, setTotalBackers] = useState(5007);

    return (
        <NewContext.Provider value={{
            showModal,
            setShowModal,
            showFinal,
            setShowFinal,
            totalMoney,
            setTotalMoney,
            bambooStand,
            setBambooStand,
            blackEditionStand,
            setBlackEditionStand,
            mahagonySpecialEdition,
            setMahagonySpecialEdition,
            totalBackers,
            setTotalBackers
            }}>
            {children}
        </NewContext.Provider>
    )

}

const UseGlobalContext = () => {
    return useContext(NewContext);
}

export {ContextProvider, UseGlobalContext}
