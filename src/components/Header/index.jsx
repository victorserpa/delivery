import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logoCoffee from "../../assets/Logo.svg";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

export function Header(props) {
  const cart = useCart()
  
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffee} alt="" />
      </a>
      <div>
        <nav>
          <div className="w-36">
            <Link
              to="/FinishedPurchase"
              className="h-11 center bg-purple-light rounded-md hover:bg-purple-400 gap-1 shadow"
            >
              <MapPin size={32} weight="fill" color="#8047F8" />
              Joinville, SC
            </Link>
          </div>
          <div className="h-11 w-10 bg-yellow rounded-md">
            <Badge color="warning" badgeContent={cart.size}>
              <Link to="/cart">
                <button className="h-11 w-10 bg-yellow-light rounded-md hover:bg-yellow-500">
                  <ShoppingCart
                    size={18}
                    weight="fill"
                    color="#C47F17"
                    className="ml-2.5"
                  />
                </button>
              </Link>
            </Badge>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}
