import { Minus, Plus, Trash } from "phosphor-react"
import { coffees } from "../../Coffees/Coffees"
import { Coffees } from "../../pages/Coffes"
import { priceFormatter } from "../../utils/formatter"

import { useCart } from "../Context/CartContext"

export function CoffeeCart() {
  const cart = useCart()
  const totalPurchase = cart.cartTotal + JSON.parse(3.50)
  return (
    <>
      <div>
        {Object.keys(cart.items).map((itemKeys) => {
          const product = cart.items[itemKeys].product
          const priceCount = product.qntd * parseInt(product.price)
          const qtd = product.qntd
          return (
            <div key={product.title}>
              <div className="flex gap-6 divide-y divide-y-reverse mt-4">
                <div className="flex gap-4">
                  <div className="mb-10">
                    <img src={product.image} className="w-16" alt="coffee" />
                  </div>
                  <div>
                    <div className="flex gap-10">
                      <div className="flex h-5">
                        <span className="font-roboto w-40">
                          {product.title}
                        </span>
                      </div>
                      <div className="ml-16">
                        <span>{priceFormatter.format(priceCount)}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="mt-2 flex content-end justify-items-start gap-2 ">
                          <div className="bg-base-button w-20 rounded h-10">
                            <div className="flex justify-around mt-[6px]">
                              <div
                                type="button"
                                onClick={() => product.qntd - 1}
                              >
                                <Minus
                                  size={18}
                                  color="#8047f8"
                                  weight="bold"
                                />
                              </div>
                              <span className="text-xl">{qtd}</span>
                              <div
                                type="button"
                                onClick={() => cart.changeQtd(product.id)}
                              >
                                <Plus size={18} color="#8047f8" weight="bold" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              type="button"
                              className="flex gap-1 items-center text-center text-sm font-roboto ml-2 border w-28 h-10 rounded-md 
                              bg-[#E6E5E5] hover:bg-[#D7D5D5] cursor-pointer"
                              onClick={() =>
                                cart.removeFromCart({
                                  id: product.id,
                                })
                              }
                              key={product.id}
                            >
                              <Trash
                                size={18}
                                color="#8047F8"
                                className="ml-2"
                              />
                              REMOVER
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div>
          <div>
            <div className="mt-10 font-roboto flex justify-between">
              <span>Total de itens</span>
              <div>
                <span className="text-lg">
                  {priceFormatter.format(cart.cartTotal)}
                </span>
              </div>
            </div>
            <div className="mt-4 font-roboto flex justify-between">
              <span>Entrega</span>
              <div>
                <span>R$ 3,50</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between font-roboto font-extrabold text-2xl">
              <h1>Total</h1>
              <div>
                <span>{priceFormatter.format(totalPurchase)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
