import type { ProductCartInterface } from "@/interfaces";

export default [
  {
    id: 1,
    title: "Raviolis",
    price: 12,
    description: "Un plat à base de pâtes fourrées à la viande et aux lègumes.",
    image: "src/assets/images/raviolis.jpg",
    category: "plats",
  },
  {
    id: 2,
    title: "Pâtes au ketchup",
    price: 11,
    description:
      "Un classique à base de pâtes et de ketchup. Particulièrement dégueulasse.",
    image: "src/assets/images/ketchup.jpg",
    category: "entrée,",
  },
  {
    id: 3,
    title: "Lasagne",
    price: 16,
    description:
      "Un plât construit en étage et composé de pâtes, de sauce tomate et de fromage.",
    image: "src/assets/images/lasagne.jpg",
    category: "plats",
  },
] as ProductCartInterface[];
