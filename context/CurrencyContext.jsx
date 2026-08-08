import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("NGN");

    useEffect(() => {
        async function getUserCurrency(){
            const url = "https://backend.iruhost.com/api/get-user-currency";

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                if (response.data.status === "success"){
                    setCurrency(response.data.currency);
                }else{
                    setCurrency("NGN");
                }
            } catch (error) {
                console.log("Error fetching user currency: ", error);
            }
        }

        getUserCurrency();
    },[])
    

    return (
        <CurrencyContext.Provider value={{ currency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);

export default CurrencyProvider;