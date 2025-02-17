import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setisBuyWindowOpen] = useState(false);
    const [selectedStockUID, setselectedStockUID] = useState('');

    const handleOpenBuyWindow = (uid) => {
        setisBuyWindowOpen(true);
        setselectedStockUID(uid);
    };

    const handeleCloseBuyWindow = () => {
        setisBuyWindowOpen(false);
        setselectedStockUID('');
    }
    return (
        <GeneralContext.Provider value={{ openBuyWindow: handleOpenBuyWindow, closeBuyWindow: handeleCloseBuyWindow }}>
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;