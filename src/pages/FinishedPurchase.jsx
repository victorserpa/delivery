import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import moto from "../assets/motobike.svg";

export function Purchase() {
  return (
    <div className="p-24 ml-32">
      <div>
        <div>
          <span className="text-3xl text-yellow-dark">
            Uhu! Pedido confirmado
          </span>
        </div>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <div className="flex gap-24">
        <div className="container w-[526px] h-72 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg grid mt-12 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="mt-10">
            <div className="font-roboto flex flex-wrap ml-10 rounded-full gap-4 mb-8">
              <div className="bg-purple rounded-full w-10 h-10">
                <MapPin
                  className=" center justify-items-center ml-2.5 mt-2.5"
                  weight="fill"
                  color="white"
                  size={20}
                />
              </div>
              <span>
                Entrega em{" "}
                <span className="font-extrabold">
                  Rua Rio Grande do Sul, 385
                </span>
                <span className="grid">América - Joinville, SC </span>
              </span>
            </div>
            <div className="font-roboto flex flex-wrap ml-10 rounded-full gap-4 mb-8">
              <div className="bg-yellow rounded-full w-10 h-10">
                <Timer
                  className=" center justify-items-center ml-2.5 mt-2.5"
                  weight="fill"
                  color="white"
                  size={20}
                />
              </div>
              <span>
                Previsão de entrega
                <span className="grid font-extrabold">20 min - 30 min</span>
              </span>
            </div>
            <div className="font-roboto flex flex-wrap ml-10 rounded-full gap-4 mt-5">
              <div className="bg-yellow-dark rounded-full w-10 h-10">
                <CurrencyDollar
                  className=" center justify-items-center ml-2.5 mt-2.5"
                  weight="fill"
                  color="white"
                  size={20}
                />
              </div>
              <span>
                Pagamento na entrega
                <span className="grid font-extrabold">Cartão de crédito</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-14">
          <img src={moto} alt="" />
        </div>
      </div>
    </div>
  );
}
