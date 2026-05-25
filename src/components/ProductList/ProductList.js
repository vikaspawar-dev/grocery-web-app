import Butter from "../../assets/butter.png";
import Strawberry from "../../assets/strawberry.png";
import Eggs from "../../assets/eggs.png";
import Cabbage from "../../assets/cabbage.png";
import Eggplant from "../../assets/eggplant.png";
import Shrimp from "../../assets/shrimp.png";
import Kiwi from "../../assets/kiwi.png";
import Capsicum from "../../assets/capsicum.png";
import Broccoli from "../../assets/broccoli.png";
import Yogurt from "../../assets/yogurt.png";
import Beef from "../../assets/beef.png";
import ChickenBreast from "../../assets/chicken-breast.png";
import Kale from "../../assets/kale.png";
import Cheese from "../../assets/ricotta-cheese.png";
import CondensedMilk from "../../assets/condensed-milk.png";
import Salmon from "../../assets/salmon.png";
import Banana from "../../assets/banana.png";
import Milk from "../../assets/milk.png";
import Pineapple from "../../assets/pineapple.png";
import Tofu from "../../assets/tofu.png";
import Tilapia from "../../assets/tilapia.png";
import SliceCheese from "../../assets/slice-cheese.png";
import Grapes from "../../assets/grapes.png";
import Lettuce from "../../assets/lettuce.png";
import Avocado from "../../assets/avocado.png";
import Corn from "../../assets/corn.png";
import Oats from "../../assets/oats.png";
import OrganicRice from "../../assets/organic-rice.png";
import GreenTea from "../../assets/green-tea.png";
import DryFruits from "../../assets/dry-fruits.png";
import OrganicHoney from "../../assets/organic-honey.png";
import AlmondMilk from "../../assets/almond-milk.png";
import Crab from "../../assets/crab.png";
import Chicken from "../../assets/chicken.png";
import CoconutMilk from "../../assets/coconut-milk.png";
import Lobster from "../../assets/lobster.png";
import Oyster from "../../assets/oyster.png";
import RedCapsicum from "../../assets/red-capsicum.png";
import Garlic from "../../assets/garlic.png";
import Apple from "../../assets/apple.png";
import PurpleCabbage from "../../assets/purple-cabbage.png";
import RedOnion from "../../assets/red-onion.png";

const product = [
  {
    id: 1,
    title: "Butter",
    price: 3.0,
    category: "Dairy",
    image: Butter,
    favorite: true,
  },
  {
    id: 2,
    title: "Strawberry",
    price: 5.0,
    category: "Fruits",
    image: Strawberry,
    favorite: true,
  },
  {
    id: 3,
    title: "Eggs",
    price: 4.0,
    category: "Dairy",
    image: Eggs,
  },
  {
    id: 4,
    title: "Cabbage",
    price: 2.5,
    category: "Vegetables",
    image: Cabbage,
    favorite: true,
  },
  {
    id: 5,
    title: "Eggplant",
    price: 3.2,
    category: "Vegetables",
    image: Eggplant,
  },
  {
    id: 6,
    title: "Shrimp",
    price: 9.0,
    category: "SeaFood",
    image: Shrimp,
    favorite: true,
  },
  {
    id: 7,
    title: "Kiwi",
    price: 2.05,
    category: "Fruits",
    image: Kiwi,
  },
  {
    id: 8,
    title: "Capsicum",
    price: 4.0,
    category: "Vegetables",
    image: Capsicum,
    favorite: true,
  },
  {
    id: 9,
    title: "Broccoli",
    price: 2.0,
    category: "Vegetables",
    image: Broccoli,
  },
  {
    id: 10,
    title: "Yogurt",
    price: 6.0,
    category: "Dairy",
    image: Yogurt,
    favorite: true,
  },
  {
    id: 11,
    title: "Beef",
    price: 12.0,
    category: "Meat",
    image: Beef,
  },
  {
    id: 12,
    title: "Chicken Breast",
    price: 10.0,
    category: "Meat",
    image: ChickenBreast,
    favorite: true,
  },
  {
    id: 13,
    title: "Kale",
    price: 3.0,
    category: "Vegetables",
    image: Kale,
  },
  {
    id: 14,
    title: "Cheese",
    price: 5.0,
    category: "Dairy",
    image: Cheese,
    favorite: true,
  },
  {
    id: 15,
    title: "Condensed Milk",
    price: 4.5,
    category: "Dairy",
    image: CondensedMilk,
  },
  {
    id: 16,
    title: "Salmon",
    price: 15.0,
    category: "SeaFood",
    image: Salmon,
    favorite: true,
  },
  {
    id: 17,
    title: "Banana",
    price: 2.5,
    category: "Fruits",
    image: Banana,
  },
  {
    id: 18,
    title: "Milk",
    price: 8.0,
    category: "Dairy",
    image: Milk,
    favorite: true,
  },
  {
    id: 19,
    title: "Pineapple",
    price: 5.0,
    category: "Fruits",
    image: Pineapple,
  },
  {
    id: 20,
    title: "Tofu",
    price: 7.0,
    category: "Organic",
    image: Tofu,
    favorite: true,
  },
  {
    id: 21,
    title: "Tilapia",
    price: 11.0,
    category: "SeaFood",
    image: Tilapia,
  },
  {
    id: 22,
    title: "Slice Cheese",
    price: 4.0,
    category: "Dairy",
    image: SliceCheese,
    favorite: true,
  },
  {
    id: 23,
    title: "Grapes",
    price: 3.5,
    category: "Fruits",
    image: Grapes,
  },
  {
    id: 24,
    title: "Lettuce",
    price: 2.0,
    category: "Vegetables",
    image: Lettuce,
    favorite: true,
  },
  {
  id: 25,
  title: "Avocado",
  price: 6.5,
  category: "Vegetables",
  image: Avocado,
  favorite: true,
},
{
  id: 26,
  title: "Sweet Corn",
  price: 4.5,
  category: "Vegetables",
  image: Corn,
  favorite: true,
},
{
  id: 27,
  title: "Oats",
  price: 6.0,
  category: "Organic",
  image: Oats,
  favorite: true,
},
{
  id: 28,
  title: "Organic Rice",
  price: 12.0,
  category: "Organic",
  image: OrganicRice,
  favorite: false,
},
{
  id: 29,
  title: "Green Tea",
  price: 8.5,
  category: "Organic",
  image: GreenTea,
  favorite: true,
},
{
  id: 30,
  title: "Dry Fruits",
  price: 14.0,
  category: "Organic",
  image: DryFruits,
  favorite: true,
},
{
  id: 31,
  title: "Organic Honey",
  price: 10.0,
  category: "Organic",
  image: OrganicHoney,
  favorite: true,
},
{
  id: 32,
  title: "Almond Milk",
  price: 9.0,
  category: "Organic",
  image: AlmondMilk,
  favorite: false,
},
{
  id: 33,
  title: "Chesapeake Crab",
  price: 18.0,
  category: "SeaFood",
  image: Crab,
  favorite: true,
},
{
  id: 34,
  title: "Fresh Chicken",
  price: 13.0,
  category: "Meat",
  image: Chicken,
  favorite: false,
},
{
  id: 35,
  title: "Coconut Milk",
  price: 7.5,
  category: "Dairy",
  image: CoconutMilk,
  favorite: true,
},
{
  id: 36,
  title: "Lobster with Lemon",
  price: 22.0,
  category: "SeaFood",
  image: Lobster,
  favorite: true,
},
{
  id: 37,
  title: "Fresh Oyster",
  price: 16.0,
  category: "SeaFood",
  image: Oyster,
  favorite: true,
},
{
  id: 38,
  title: "Red Capsicum",
  price: 4.0,
  category: "Vegetables",
  image: RedCapsicum,
  favorite: true,
},
{
  id: 39,
  title: "Garlic",
  price: 3.0,
  category: "Vegetables",
  image: Garlic,
  favorite: true,
},
{
  id: 40,
  title: "Apple",
  price: 5.5,
  category: "Fruits",
  image: Apple,
  favorite: true,
},
{
  id: 41,
  title: "Purple Cabbage",
  price: 4.5,
  category: "Vegetables",
  image: PurpleCabbage,
  favorite: false,
},
{
  id: 43,
  title: "Red Onion",
  price: 2.5,
  category: "Vegetables",
  image: RedOnion,
  favorite: false,
},
];

export default product;