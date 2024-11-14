import { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (ItemId) => {
        if (!cartItems[ItemId]) {
            setCartItems((prev) => ({ ...prev, [ItemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }))
        }
    }

    const removeFromCard = (ItemId) => {

        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item)  //Product avaliable in the cart
                totalAmount += itemInfo.price * cartItems[item]; //by cartitems we would find the quantity of the items
            }
        }

        return totalAmount
    }

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCard,
        getTotalCartAmount
    }



    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider