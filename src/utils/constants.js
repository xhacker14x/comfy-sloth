import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "To establish Comfy Sloth Furniture Systems and the products to be a very dependable name.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To be committed to seek growth and prosperity achieving a sustainable competitive share of the industry.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We started this business for more than a decade, and now we are still here to continue serving you.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
