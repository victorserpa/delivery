import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { CoffeeCart } from "../components/TableCoffeePurchase";
export function Cart({ loadedCart }) {
const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  function handleCreatePurchaseCoffee() {
    console.log("comprei");
  }

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
  `;

  const ButtonToggle = styled(Button)`
    margin-left: 5px;
    opacity: 0.7;
    ${({ active }) =>
      active &&
      `
    opacity: 1;
    background: #EBE5F9;
  `}
  `;

  const types = ["Crédito", "Débito", "Dinheiro"];

  function ButtonGroup() {
    const [active, setActive] = useState(types[0]);
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
    );
  }

  return (
    <div>
      <div className="ml-20">
        <div className="mt-20 flex gap-96">
          <h1 className="font-bold text-3xl">Complete seu Pedido</h1>
          <div className="ml-10">
            <h1 className="font-bold text-3xl center">Cafés selecionados</h1>
          </div>
        </div>
        <div className="">
          <form
            className="grid grid-rows-2 grid-flow-col w-20 h-[600px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mt-5 border w-[640px] p-10 bg-[#F3F2F2] container rounded-lg shadow-sm mr-20 h-96 row-span">
              <div className="gap-5 flex flex-wrap">
                <MapPinLine size={24} color="#c47f17" weight="light" />
                <div>
                  <span className="text-center">Endereço de Entrega</span>
                  <h2>Informe o endereço onde deseja receber seu pedido</h2>
                </div>
              </div>
              <div className="gap-5 p-5 grid">
                <div>
                  <input
                    type="text"
                    {...register("CEP")}
                    placeholder="CEP"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
                </div>
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
                <div className="flex gap-5 justify-self-auto">
                  <input
                    type="text"
                    {...register("number", { valueAsNumber: true })}
                    placeholder="Número"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
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
                </div>
                <div className="flex gap-5">
                  <input
                    type="text"
                    {...register("bairro")}
                    placeholder="Bairro"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
                  <input
                    type="text"
                    {...register("city")}
                    placeholder="Cidade"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
                  <input
                    type="text"
                    {...register("UF")}
                    placeholder="UF"
                    id=""
                    className="mt-1 block w-full px-3 py-2 bg-base-input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-yellow-dark focus:ring-1 focus:ring-yellow-dark
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
                  />
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
                <CoffeeCart title={"title"} />
                <div className="mt-10 font-roboto flex justify-between">
                  <span>Total de itens</span>
                  <div>
                    <span className="text-lg">0</span>
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
                    <span>R$ 43,10</span>
                  </div>
                </div>
                <div className="ml-3">
                  <button
                    type="submit"
                    className="text-white text-lg bg-yellow w-96 mt-10 center text-center h-10 rounded-lg hover:bg-yellow-dark"
                  >
                    Confirmar Pedido
                  </button>
                  {errors.exampleRequired && <p>This field is required</p>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
