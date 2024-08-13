import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const StoreContex = createContext(null);



const StoreContexProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    
    const url = "http://localhost:3000";

    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => 
            ({...prev, [itemId]: 1 })
         )
    } else {
 /*Take a look*/ setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
    }
    if (token) {
        await axios.post(url + "/api/cart/add", { itemId }, {headers: {token}});
    }

}
const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    
    if (token) {
        await axios.post(url + "/api/cart/remove", {itemId}, {headers: {token}})
    }
    }
    
    

    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);

            totalAmout += (itemInfo.price * cartItems[item]);
            }
            
        }
        return totalAmout;
    }
    //This is for if we reload the web page we have the token before so that we remained login
    

    const loadCartData = async (token) => {
        try {
        const response = await axios.get(url + "/api/cart/get", {
            headers: { token }
        });
        setCartItems(response.data.cartData); // Default to empty object if no cartData is returned
    } catch (error) {
        console.error("Failed to load cart data:", error);
    }
    } 
    

    useEffect(() => {
          async function loadData() {
              await fetchFoodList();

              if (localStorage.getItem("token")) {
                  setToken(localStorage.getItem("token"))
                  
                  await loadCartData(localStorage.getItem("token"))
              }
              
             
        }
         loadData();
        
    }, [])

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        console.log(response.data.data);
        setFoodList(response.data.data);
    }

    

    const contexValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
  }
    return (
        <StoreContex.Provider value = {contexValue}>
            {props.children}
    </StoreContex.Provider>
    )
}
export default StoreContexProvider;