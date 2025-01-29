import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "@/context/CategoriesContext";
import classes from "@/components/ProductDetails/ProductDetails.module.scss";
import clsx from "clsx";
import { Nav, Tab } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const { categories } = useCategories();

  const product = categories
    .flatMap((category) => category.products)
    .find((prod) => prod.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  const [selectedImage, setSelectedImage] = useState(product.image[0]); // Set first image as selected
  const [activeTab, setActiveTab] = useState("description"); // Default active tab

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="text-start" style={{ backgroundColor: "#e4f3ea" }}>
            {product.description}
          </div>
        );

      case "specification":
        return (
          <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                {product.specification &&
                  product.specification.map((spec, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          <strong>Form:</strong>
                        </td>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          {spec.form}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          <strong>Ingredients:</strong>
                        </td>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          {spec.ingredients}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          <strong>Size:</strong>
                        </td>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          {spec.size}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          <strong>Color/Taste/Aroma:</strong>
                        </td>
                        <td
                          className="text-start"
                          style={{ backgroundColor: "#e4f3ea" }}
                        >
                          {spec.color_taste_aroma}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          </div>
        );

      case "additionalInfo":
        return (
          <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                {product.additionalInfo &&
                  product.additionalInfo.map((info, index) => (
                    <tr key={index}>
                      <td
                        className="text-start"
                        style={{ backgroundColor: "#e4f3ea" }}
                      >
                        <strong>{info.key}:</strong>
                      </td>
                      <td
                        className="text-start"
                        style={{ backgroundColor: "#e4f3ea" }}
                      >
                        {info.value}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <div>{product.description}</div>;
    }
  };

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
      <div className="pt-2">
        <Tab.Container
          id="product-tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
        >
          <Nav variant="pills" className="mb-3">
            <Nav.Item style={{ backgroundColor: "#e65f382b", color: "black" }}>
              <Nav.Link
                eventKey="description"
                style={{
                  backgroundColor: activeTab === "description" ? "#e65f38" : "",
                  color: activeTab === "description" ? "white" : "black",
                }}
              >
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ backgroundColor: "#e65f382b" }}>
              <Nav.Link
                eventKey="specification"
                style={{
                  backgroundColor:
                    activeTab === "specification" ? "#e65f38" : "",
                  color: activeTab === "specification" ? "white" : "black",
                }}
              >
                Specifications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ backgroundColor: "#e65f382b" }}>
              <Nav.Link
                eventKey="additionalInfo"
                style={{
                  backgroundColor:
                    activeTab === "additionalInfo" ? "#e65f38" : "",
                  color: activeTab === "additionalInfo" ? "white" : "black",
                }}
              >
                Additional Information
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="description">{renderTabContent()}</Tab.Pane>
            <Tab.Pane eventKey="specification">{renderTabContent()}</Tab.Pane>
            <Tab.Pane eventKey="additionalInfo">{renderTabContent()}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default ProductDetails;
