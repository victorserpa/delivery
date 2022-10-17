import { Minus, Plus, Trash } from "phosphor-react";

// import { useState } from "react";

import { useCart } from "../Context/CartContext";

export function CoffeeCart(props) {
  const cart = useCart();
  return (
    <>
      <div>
        {Object.keys(cart.items).map((itemKeys) => {
          const product = cart.items[itemKeys].product;
          const priceCount = product.qntd * parseInt(product.price);
          return (
            <div
              className="flex gap-6 divide-y divide-y-reverse mt-4"
              key={product.id}
            >
              <div className="flex gap-4">
                <div className="mb-10">
                  <img src={product.image} className="w-16" />
                </div>
                <div>
                  <div className="flex gap-10">
                    <div className="flex gap- h-5">
                      <span className="font-roboto w-40">{product.title}</span>
                    </div>
                    <div className="ml-16">
                      <span>R$ {priceCount},00</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="mt-2 flex content-end justify-items-start gap-2 ">
                        <div className="bg-base-button w-20 rounded h-10">
                          <div className="flex justify-around mt-[6px]">
                            <button>
                              <Minus size={18} color="#8047f8" weight="bold" />
                            </button>
                            <span className="text-xl">{product.qntd}</span>
                            <div
                              onClick={() => setCountCoffee(setCountCoffee + 1)}
                              type="button"
                              
                            >
                              <Plus size={18} color="#8047f8" weight="bold" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                          type="button"
                            className="flex gap-1 items-center text-center text-sm font-roboto ml-2 border w-28 h-10 rounded-md bg-[#E6E5E5] hover:bg-[#D7D5D5] cursor-pointer"
                            onClick={() =>
                              cart.removeFromCart({
                                id: product.id,
                              })
                            }
                            key={product.id}
                          >
                            <Trash size={18} color="#8047F8" className="ml-2" />
                            REMOVER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
