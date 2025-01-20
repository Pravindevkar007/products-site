import React from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "@/context/CategoriesContext";
import classes from "@/components/ProductDetails/ProductDetails.module.scss";
import clsx from "clsx";

const ProductDetails = () => {
  const { productId } = useParams();
  const { categories } = useCategories();

  const product = categories
    .flatMap((category) => category.products)
    .find((prod) => prod.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  return (
    <section className="mid-section">
      <div className={clsx(classes["product-details"], "d-flex gap-4")}>
        <img
          src={product.image}
          alt={product.name}
          className={clsx(classes["product-image"])}
        />
        <div className="d-flex gap-4 pb-4 flex-column p-2" style={{backgroundColor: "#e4f3ea"}}>
          <div className="d-flex align-items-start" >
            <strong>{product.name}</strong>
          </div>
          <div className="d-flex" >
            <div className="text-start">{product.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
