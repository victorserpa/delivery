import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import styled from "styled-components"

import { CurrencyDollar, MapPinLine, ShoppingCart, Link } from "phosphor-react"

import { CoffeeCart } from "../components/TableCoffeePurchase"
import { useCart } from "../components/Context/CartContext"

export function Cart() {
  const schema = yup
    .object({
      cep: yup.string().required("O CEP é obrigatório"),
      rua: yup.string().required("A Rua é obrigatório"),
      number: yup.string().required("O Número é obrigatório"),
      bairro: yup.string().required("O Bairro é obrigatório"),
      city: yup.string().required("A Cidade é obrigatório"),
      uf: yup.string().required("O Estado é obrigatório"),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const Button = styled.button`
    background-color: #e6e5e5;
    /* color: white; */
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #ebe5f9;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `

  const ButtonToggle = styled(Button)`
    margin-left: 5px;
    opacity: 0.7;
    ${({ active }) =>
      active &&
      `
    opacity: 1;
    background: #EBE5F9;
  `}
  `

  const types = ["Crédito", "Débito", "Dinheiro"]

  function ButtonGroup() {
    const [active, setActive] = useState()
    return (
      <div>
        {types.map((type) => (
          <ButtonToggle
            active={active === type}
            onClick={() => setActive(type)}
            type="button"
            key={type}
          >
            {type}
          </ButtonToggle>
        ))}
      </div>
    )
  }

  const onSubmit = (data) => console.log(data)

  const cart = useCart()

  return (
    <div>
      <div className="ml-20">
        <div className="mt-20 flex gap-96">
          <h1 className="font-bold text-3xl">Complete seu Pedido</h1>
          <div className="ml-10">
            <h1 className="font-bold text-3xl center">Cafés selecionados</h1>
          </div>
        </div>
        <div>
          <form
            className="grid grid-rows-2 grid-flow-col w-20 h-[700px] "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mt-5 border w-[640px] p-10 bg-[#F3F2F2] container rounded-lg shadow-sm mr-20 h-[460px] row-span">
              <div className="gap-5 flex flex-wrap">
                <MapPinLine size={24} color="#c47f17" weight="light" />
                <div>
                  <span className="text-center">Endereço de Entrega</span>
                  <h1>Informe o endereço onde deseja receber seu pedido</h1>
                </div>
              </div>
              <div className="gap-5 p-5 grid">
                <div>
                  <label>CEP</label>
                  <input
                    {...register("cep", {
                      required: "Você deve informar o seu CEP",
                      maxLength: {
                        value: 8,
                        message: "CEP possui mais de 8 números",
                      },
                      pattern: {
                        value: /^[0-9]{8}$/i,
                        message: "CEP informado incorretamente",
                      },
                    })}
                    placeholder="CEP"
                    id="cep"
                    name="cep"
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
                  {errors.cep && (
                    <p className="underline absolute">{errors.cep.message}</p>
                  )}
                </div>
                <label>
                  Rua
                  <input
                    type="text"
                    {...register("Rua")}
                    placeholder="Rua"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
                  {errors.rua && (
                    <p className="underline absolute">{errors.rua.message}</p>
                  )}
                </label>
                <div className="flex gap-5 justify-self-auto">
                  <label>
                    Numero
                    <input
                      type="text"
                      {...register("number", {
                        required:
                          "Você deve informar o número do local de entrega",
                      })}
                      placeholder="Número"
                      id="number"
                      className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                    />
                    {errors.number && (
                      <p className="underline absolute">
                        {errors.number.message}
                      </p>
                    )}
                  </label>
                  <label>
                    Complemento
                    <input
                      type="text"
                      {...register("complemento")}
                      placeholder="Complemento"
                      id=""
                      className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                    />
                  </label>
                </div>
                <div className="flex gap-5">
                  <label>
                    Bairro
                    <input
                      type="text"
                      {...register("bairro", {
                        required: "Você deve informar o seu bairro",
                      })}
                      placeholder="Bairro"
                      id="bairro"
                      className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                    />
                    {errors.bairro && (
                      <p className="underline absolute">
                        {errors.bairro.message}
                      </p>
                    )}
                  </label>
                  <label>
                    Cidade
                    <input
                      type="text"
                      {...register("city", {
                        required: "Você deve informar a sua cidade",
                      })}
                      placeholder="Cidade"
                      id="city"
                      className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                    />
                    {errors.city && (
                      <p className="underline absolute">
                        {errors.city.message}
                      </p>
                    )}
                  </label>
                  <label>
                    UF
                    <input
                      type="text"
                      {...register("UF", {
                        required: "Você deve informar o seu estado",
                      })}
                      placeholder="UF"
                      id="uf"
                      className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                    />
                    {errors.uf && (
                      <p className="underline absolute">{errors.uf.message}</p>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className=" border w-[640px] p-8 bg-[#F3F2F2] container rounded-lg shadow-sm  mt-36">
              <div className="gap-3 flex flex-wrap">
                <CurrencyDollar size={24} weight="fill" color="#8047F8" />
                <div className="text-base">
                  <span className="text-center">Pagamento</span>
                  <h2>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h2>
                </div>
              </div>
              <div className="mt-2 ml-28 flex">
                <ButtonGroup />
              </div>
            </div>
              <div>
                <div className="mt-5 mr-10 border w-[498px] p-10 bg-[#F3F2F2] container rounded-lg shadow-sm rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg ">
                {cart.size > 0 && <CoffeeCart title={"title"} />}
                {cart.size === 0 && (
                  <div>
                    <div className="flex justify-center">
                      <ShoppingCart size={80} />
                    </div>
                    <div className="text-center mt-2 text-xl -mb-5 grid items-center">
                      Carrinho vazio
                      <a
                        href="/"
                        className="text-white text-lg bg-yellow w-96 mt-10 center text-center h-10 rounded-lg hover:bg-yellow-dark "
                      >
                        Voltar Home
                      </a>
                    </div>
                    <div className="ml-3"></div>
                  </div>
                )}
                <div className="ml-3">
                  {cart.size > 0 && (
                    <button
                      type="submit"
                      className="text-white text-lg bg-yellow w-96 mt-10 center text-center h-10 rounded-lg hover:bg-yellow-dark "
                    >
                      Confirmar Pedido
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className="mt-5 ml-20 animate-pulse "></div>
        </div>
      </div>
    </div>
  )
}
