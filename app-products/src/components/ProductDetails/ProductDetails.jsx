import React, { useState } from "react";
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

  const [selectedImage, setSelectedImage] = useState(product.image[0]); // Set first image as selected

  return (
    <section className="mid-section">
      <div className={clsx(classes[""], "d-flex gap-4")}>
        <img
          src={selectedImage}
          alt={product.name}
          className={clsx(classes[""], "border border-success ")}
        />
        <div
          className={clsx(
            "d-flex gap-4 pb-4 flex-column p-2",
            classes["product-background"]
          )}
        >
          <div className="d-flex align-items-start">
            <strong>{product.name}</strong>
          </div>
          <div className="d-flex">
            <div className="text-start">{product.description}</div>
          </div>
          <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    <strong>Potency:</strong>
                  </td>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    {product.potency}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    <strong>Source:</strong>
                  </td>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    {product.source}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    <strong>Packaging:</strong>
                  </td>
                  <td
                    className="text-start"
                    style={{ backgroundColor: "#e4f3ea" }}
                  >
                    {product.packaging}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Thumbnails of Other Images */}
      <div className="pt-3 d-flex gap-5">
        {product.image.map((img, index) => (
          <div key={index} md={2} className="mb-2 d-flex ">
            <img
              src={img}
              alt={`product-thumbnail-${index}`}
              className={clsx(
                classes["thumbnails-images"],
                "border border-success "
              )}
              onClick={() => setSelectedImage(img)} // Change main image on click
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
