import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { coffees } from "../Coffees/Coffees";
import { useCart } from "../components/Context/CartContext";
import { priceFormatter } from "../utils/formatter";

export const Coffees = () => {
  const cart = useCart();
  
  return (
    <div className="mt-20 ml-2">
      <div>
        <span className="font-extrabold text-4xl  ml-10">Nossos cafés</span>
      </div>
      <div className=" grid grid-cols-4 mx-24 center">
        {coffees.map((coffeeList) => {
          const [countCoffee, setCountCoffee] = useState(1);

          coffeeList.qntd = countCoffee

          return (
            <div
              className="container w-72 h-80 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg bg-[#F3F2F2] grid justify-items-center mt-12"
              key={coffeeList.id}
            >
              <img src={coffeeList.image} alt="" className="-mt-5" />
              <div className="h-6 gap-2 w-64 flex justify-center text-center">
                {coffeeList.tags.map((Element) => (
                  <span
                    key={`${coffeeList.id}${Element}`}
                    className=" text-yellow-dark bg-yellow-light w-28  rounded-xl"
                  >
                    {Element}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <span className="text-xl">{coffeeList.title}</span>
                <h2 className="text-[14px] font-roboto w-56">
                  {coffeeList.description}
                </h2>
                <div>
                  <div className="mt-14 flex content-end justify-items-start">
                    <span className="ml-1 text-3xl font-bold font-baloo">
                      {priceFormatter.format(coffeeList.price)}
                    </span>
                    <div className="ml-3 bg-base-button w-20 rounded h-10">
                      <div className="flex justify-around mt-[6px]">
                        <button onClick={() => setCountCoffee(countCoffee - 1)}>
                          <Minus size={18} color="#8047f8" weight="bold" />
                        </button>
                        <span className="text-xl">{countCoffee}</span>
                        <button onClick={() => setCountCoffee(countCoffee + 1)}>
                          <Plus size={18} color="#8047f8" weight="bold" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => cart.addToCart(coffeeList)}
                        className="bg-purple-dark rounded-lg ml-2 w-10 hover:bg-purple"
                      >
                        <ShoppingCart
                          size={24}
                          className="m-2"
                          color="white"
                          weight="fill"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
