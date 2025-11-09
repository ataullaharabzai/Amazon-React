import { createContext, useContext } from "react";

const CardContext = createContext({
    cardItem: [
        {id: 1, title: "Laptop", price: 600},
        {id: 2, title: "IPhone", price: 900},
        {id: 3, title: "AirPods", price: 200},
    ],
    myItem: [],
    addCard: (id, title, price) => {}, 
    deleteCard: (id) => {},
    buyItems: (item) => {},
})

export const CardProvider = CardContext.Provider

export const useCard = () => {
    return useContext(CardContext)
}