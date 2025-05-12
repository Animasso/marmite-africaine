import Pastel from "./assets/AfriquePlat/pastel.jpg";
import SaladeP from "./assets/menu/salade-poulet.png";
import SaladeD from "./assets/menu/salade-patates.png";
import TiebPoulet from "./assets/menu/tieb-poulet.png";
import TiebPoisson from "./assets/menu/tieb-poisson.png";
import Gombo from "./assets/AfriquePlat/gombo.jpg";
import Mafe from "./assets/AfriquePlat/mafé.jpg";
import BrochetteP from "./assets/menu/brochette-poulet.png";
import BrochetteB from "./assets/menu/brochette-djibi.png";
import Foufou from "./assets/menu/foufou.png";
import Alloco from "./assets/menu/alloco.png";
import Frites from "./assets/menu/frite.png";
import FritesPatate from "./assets/menu/frite-patate.png";
import RizBlanc from "./assets/menu/riz-blanc.png";
import RizRouge from "./assets/menu/riz-rouge.png";
import Ananas from "./assets/menu/ananas-roti.png";
import Tiramisu from "./assets/menu/tiramisu-Africain.png";
import Beignets from "./assets/menu/beignet-glace.png";
import Bissap from "./assets/menu/jus-bissap.png";
import Ginger from "./assets/menu/jus-gingenbre.png";
import Bubble from "./assets/menu/bubble-mangue.png";
import Sodas from "./assets/menu/sodas.png";

export const entrees = [
  {
    id: 1,
    name: "Pastel",
    description:
      "Beignets farcis à la viande ou au poisson, souvent servis avec une sauce piquante.",
    price: 9.99,
    image: Pastel,
  },
  {
    id: 2,
    name: "Salade poulet",
    description:
      "Salade de poulet grillé, légumes frais et vinaigrette épicée.",
    price: 8.99,
    image: SaladeP,
  },
  {
    id: 2,
    name: "Salade patate-douce",
    description: "Salade de patate douce, légumes frais et vinaigrette épicée.",
    price: 8.99,
    image: SaladeD,
  },
];
export const plats = [
  {
    id: 1,
    name: "Thieb Poulet",
    description: "Riz parfumé aux épices, servi avec du poulet et des légumes.",
    price: 11.99,
    image: TiebPoulet,
  },
  {
    id: 2,
    name: "Thieb Poisson",
    description:
      "Riz parfumé aux épices, servi avec du poisson et des légumes.",
    price: 12.99,
    image: TiebPoisson,
  },
  {
    id: 3,
    name: "Gombo",
    description:
      "Ragoût de gombo épicé, souvent servi avec du riz ou du foufou.",
    price: 12.99,
    image: Gombo,
  },
  {
    id: 4,
    name: "Mafé",
    description:
      "Ragoût de viande ou de poisson à base de pâte d'arachide, servi avec du riz.",
    price: 13.99,
    image: Mafe,
  },
  {
    id: 4,
    name: "Brochette e poulet",
    description: "Brochette de poulet marinée, grillée à la perfection.",
    price: 13.99,
    image: BrochetteP,
  },
  {
    id: 5,
    name: "Brochette de boeuf djibi",
    description: "Brochette de boeuf marinée, grillée à la perfection.",
    price: 13.99,
    image: BrochetteB,
  },
  {
    id: 6,
    name: "Foufou sauce graine",
    description: "Foufou accompagné d'une sauce à base de graines de palme.",
    price: 13.99,
    image: Foufou,
  },
];
export const Accompagnements = [
  {
    id: 1,
    name: "Alloco",
    description:
      "Bananes plantains frites, servies avec une sauce pimentée et des oignons.",
    price: 8.99,
    image: Alloco,
  },
  {
    id: 2,
    name: "Frites",
    description: "Frites croustillantes, servies avec une sauce piquante.",
    price: 5.99,
    image: Frites,
  },
  {
    id: 3,
    name: "Frites de patate douce",
    description:
      "Frites de patate douce croustillantes, servies avec une sauce piquante.",
    price: 5.99,
    image: FritesPatate,
  },
  {
    id: 4,
    name: "Riz blanc",
    description: "Riz blanc parfumé, servi avec une sauce épicée.",
    price: 5.99,
    image: RizBlanc,
  },
  {
    id: 5,
    name: "Riz Rouge",
    description: "Riz rouge parfumé, servi avec une sauce épicée.",
    price: 5.99,
    image: RizRouge,
  },
];
export const desserts = [
  {
    id: 1,
    name: "Ananas rôti",
    description: "Ananas grillé, servi avec du miel et de la noix de coco.",
    price: 8.99,
    image: Ananas,
  },
  {
    id: 2,
    name: "Tiramisu africain",
    description: "Tiramisu traditionnel revisité avec des saveurs africaines.",
    price: 12.99,
    image: Tiramisu,
  },
  {
    id: 3,
    name: "Beignets fourrés chocolat avec glace",
    description: " Beignets fourrés chocolat avec glace vanille ou chocolat.",
    price: 11.99,
    image: Beignets,
  },
];
export const boissons = [
  {
    id: 1,
    name: "Bissap",
    description:
      "Boisson à base de fleurs d'hibiscus, sucrée et rafraîchissante.",
    price: 2.99,
    image: Bissap,
  },
  {
    id: 2,
    name: "Jus de gingembre",
    description: "Boisson à base de gingembre, sucrée.",
    price: 2.99,
    image: Ginger,
  },
  {
    id: 3,
    name: "Sodas",
    description: "Oasis, Coca-colas, Schweeps,Orangina, Fantas.",
    price: 1.99,
    image: Sodas,
  },
  {
    id: 4,
    name: "Bubble tea mangue",
    description: "Boisson bubble tea à la mangue, sucrée et acidulée.",
    price: 3.99,
    image: Bubble,
  },
];
