import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import useSWR from "swr";
import coffeeImage from "../assets/ImageCoffee.svg";
import { Coffees } from "./Coffes";

const fetcher = (...args) => fetch(...args).then(res => res.json())

import { useCart } from "../components/Context/CartContext";
import {Alert} from '@mui/material';

export function Home(props) {
  const cart = useCart();
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <div className="grid">
        <div className="mt-20 flex justify-center gap-36">
          <div className="w-1/2  -ml-16">
            <span className="text-7xl font-extrabold">
              Encontre o café perfeito para qualquer hora do dia
            </span>
            <div className="mt-5 text-xl">
            
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>
            <div className="gap-5 grid grid-cols-2 mt-10 mr-40 items-center ">
              <div className="flex gap-3 items-center content-center">
                <div className="flex bg-[#C47F17] h-10 w-10 items-center rounded-full">
                  <ShoppingCart
                    size={24}
                    className="ml-2"
                    color="white"
                    weight="fill"
                  />
                </div>
                <span className="mt-1 text-lg">Compra simples e segura</span>
              </div>
              <div className="flex gap-3 items-center content-center">
                <div className="flex bg-[#574F4D] h-10 w-10 items-center rounded-full">
                  <Package
                    size={24}
                    className="ml-2"
                    color="white"
                    weight="fill"
                  />
                </div>
                <span className="-mt-1 text-lg">
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div className="flex gap-3 items-center content-center">
                <div className="flex bg-[#DBAC2C] h-10 w-10 items-center rounded-full">
                  <Timer
                    size={24}
                    className="ml-2"
                    color="white"
                    weight="fill"
                  />
                </div>
                <span className="-mt-1 text-lg">
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className="flex gap-3 items-center content-center">
                <div className="flex bg-[#8047F8] h-10 w-10 items-center rounded-full">
                  <Coffee
                    size={24}
                    className="ml-2"
                    color="white"
                    weight="fill"
                  />
                </div>
                <span className="-mt-1 text-lg">Compra simples e segura</span>
              </div>
            </div>
          </div>
          <div className="">
            <img src={coffeeImage} alt="" />
          </div>
        </div>
      </div>
      <Coffees />
    </div>
  );
}
