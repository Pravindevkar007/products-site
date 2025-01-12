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
      <h4 className="pb-4">Product Categories</h4>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} md={3}>
            <ProductCard
              image={category.image}
              title={category.name}
              count={category.count}
              onClick={() => handleMoreDetails(category.id)}
              buttonText="Show products"
            />
          </Col>
        ))}
      </Row>
    </section>
    </>
  
  );
};

export default CategoriesSection;
