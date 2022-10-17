import Expresso from "../assets/CoffeesCard/Expresso.svg";
import Americano from "../assets/CoffeesCard/Americano.svg";
import ExpressoCremoso from "../assets/CoffeesCard/ExpressoCremoso.svg";
import ExpressoGelado from "../assets/CoffeesCard/CafeGelado.svg";
import ComLeite from "../assets/CoffeesCard/CafeLeite.svg";
import Latte from "../assets/CoffeesCard/Latte.svg";
import Capucho from "../assets/CoffeesCard/Capuccino.svg";
import Mocchi from "../assets/CoffeesCard/Macchiato.svg";
import Moca from "../assets/CoffeesCard/Mochaccino.svg";
import ChocoQuente from "../assets/CoffeesCard/ChocolateQuente.svg";
import Cubano from "../assets/CoffeesCard/Cubano.svg";
import Havaiano from "../assets/CoffeesCard/Havaiano.svg";
import Arabe from "../assets/CoffeesCard/Arabe.svg";
import Irlandes from "../assets/CoffeesCard/Irlandes.svg";

export const coffees = [
  {
    id: "Expresso Tradicional",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: Expresso,
    tags: ["Tradicional"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Expresso Americano",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: Americano,
    tags: ["Tradicional"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Expresso Cremoso",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: ExpressoCremoso,
    tags: ["Tradicional"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Expresso Gelado",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: ExpressoGelado,
    tags: [["Tradicional"], "Gelado"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Café com Leite",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: ComLeite,
    tags: ["Tradicional", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "latte",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: Latte,
    tags: ["Tradicional", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Capuccino",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: Capucho,
    tags: ["Tradicional", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Mocchiato",
    title: "Mocchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: Mocchi,
    tags: ["Tradicional", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Mocaccino",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: Moca,
    tags: ["Tradicional", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Chocolate Quente",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: ChocoQuente,
    tags: ["Especial", "Com Leite"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Cubano",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: Cubano,
    tags: ["Especial", "Alcoólico", "Gelado"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Havaiano",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: Havaiano,
    tags: ["Especial"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Árabe",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: Arabe,
    tags: ["Especial"],
    price: "9,90",
    qntd: [{}],
  },
  {
    id: "Irlandês",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: Irlandes,
    tags: ["Especial", "Alcoólico"],
    price: "9,90",
    qntd: [{}],
  },
];
