import { createContext, useContext, useEffect, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState({})

  useEffect(() => {
    const loadedCart = localStorage.getItem("cart")
    if (loadedCart) {
      setItems(JSON.parse(loadedCart))
    }
  })
  
  const cartTotal = () => {
    return Object.keys(items).reduce((prev, productId) => {
      const productPrice = items[productId].product.price
      // console.log(items[productId].product.price)
      const productQntd = items[productId].product.qntd
      const subTotal = productQntd * productPrice

      return prev + subTotal
    }, 0)
  }
  const addToCart = (product) => {
    setItems((current) => {
      const newCart = {
        ...current,
        [product.id]: {
          product,
        },
      }
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }
  
  const removeFromCart = (product) => {
    const id = [product.id]
    setItems((current) => {
      const { [id]: etc, ...newCart } = current
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }

  const changeQtd = (product, coffeeList) => {
    setItems((current) => {
      const newCart = { ...current }
      newCart[product] = {
        ...newCart[product],
        qtd: items[product].product.qntd + 1,
      }

      console.log({ newCart })
      // console.log(cart)
      return current
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }
  
  const size = Object.keys(items).length

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, size, changeQtd, cartTotal: cartTotal() }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}
