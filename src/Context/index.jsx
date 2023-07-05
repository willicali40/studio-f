import { createContext, useState, useEffect } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  // cart state
  const [count, setCount ] = useState(0)

  // category could be ether man, femal or outlet
  const [isCategoryActive, setIsCategoryActive] = useState(false)

  // array that has the items filtered in the input
  const [filteredItems, setFilteredItems] = useState([])

  // data from the user typed on the input
  const [inputValue, setInputValue] = useState('')

  // data coming from the fetch
  const [data, setData] = useState([]);

  // this code is to change the header when clicking on link for products
  const [category, setCategory] = useState(null);

  // fetch from api
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function itemsFiltered(data, inputValue) {
    return data?.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase()))
  }

  useEffect(() => {
    if (inputValue) {
      setFilteredItems(itemsFiltered(data, inputValue))
    }
  }, [data, inputValue])

  const [isProductsToCartOpen, setIsProductsToCartOpen] = useState(false)

  function openProductsToCart() {
    setIsProductsToCartOpen(true)
  }

  function closeProductsToCart() {
    setIsProductsToCartOpen(false)
  }

  return (
    <ShoppingContext.Provider
      value={{
        data,
        setData,
        category,
        setCategory,
        inputValue,
        setInputValue,
        filteredItems,
        setFilteredItems,
        isCategoryActive,
        setIsCategoryActive,
        count,
        setCount,
        isProductsToCartOpen,
        setIsProductsToCartOpen,
        openProductsToCart,
        closeProductsToCart
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
