import React from "react";
import AddToCart from "./AddToCart";
import styles from "./productCard.module.css"; // this will be Js object so the classes we define in
// this css module will end up being properties of that object.
// and that means in css module we cannot use hyphens when naming these like "card-container" becuz this is not
//valid property name for Js in object so always use camle notation

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
