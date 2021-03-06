import { createContext } from "react"
import { ICart } from "../../interfaces"

interface ContextProps {
  cart: ICart[]
}

export const CartContext = createContext({} as ContextProps)