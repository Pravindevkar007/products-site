import React from "react";
import clsx from "clsx";
import classes from "@/components/ProductCard/ProductCard.module.scss"; // Optional SCSS styling

const ProductCard = ({ image, title, count, onClick }) => {
  return (
    <div className={clsx(classes["card"])}>
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "15rem" }}
      />
      <div className="card-body">
        <h5 className={`card-title ${classes.cardTitle}`}>{title}</h5>
        <p className={`card-description ${classes.cardDescription}`}>
          {count} Products
        </p>
        <button
          onClick={onClick}
          className={clsx("btn", classes["card-button"], "mb-4")}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
