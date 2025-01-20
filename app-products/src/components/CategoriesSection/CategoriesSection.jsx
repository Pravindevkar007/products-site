import React from "react";
import { Row, Col } from "react-bootstrap"; // For grid layout
import ProductCard from "@/components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCategories } from "@/context/CategoriesContext";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const { categories } = useCategories();

  const handleMoreDetails = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <>
      <section id="categories" className="mid-section">
        <div className="d-flex pb-4 flex-column" style={{backgroundColor: "#e4f3ea"}}>
          <div className="d-flex align-items-start p-2">
            <strong>
              Product Categories : Premium Solutions for Digestive Health and
              Nutritional Support
            </strong>
          </div>
          <div className="d-flex p-2">
            <div className="text-start">
              Apple powder? is a prebiotic and hence good for the gut health. It
              aids weight management by keeping you satiated for a longer time
              and preventing hunger pangs that often otherwise lead to unhealthy
              snacking. It is good for type 2 diabetic patients as it reduces
              blood sugar levels in the bodies. It promotes heart health by
              helping lower cholesterol and blood pressure levels. Apple fruit
              powder is often used in the preparation of sauces, baked goods,
              desserts, and many more food items.
            </div>
          </div>
        </div>
        <Row className="pt-3" >
          {categories.map((category) => (
            <Col key={category.id} md={3}>
              <ProductCard
                image={category.image}
                title={category.name}
                count={category.count}
                onClick={() => handleMoreDetails(category.id)}
                buttonText="Show Products"
              />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default CategoriesSection;
