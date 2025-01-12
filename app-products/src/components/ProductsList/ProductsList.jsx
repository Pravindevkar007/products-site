import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useCategories } from "@/context/CategoriesContext";

const ProductsList = () => {
  const { id } = useParams();
  const { categories } = useCategories();

  const category = categories.find((cat) => cat.id === parseInt(id));

  if (!category) return <p>Category not found</p>;

  return (
    <section className="mid-section">
      <h4 className="pb-4">{category.name}</h4>
      <Row>
        {category.products.map((product) => (
          <Col key={product.id} md={3}>
            <ProductCard
              image={product.image}
              title={product.name}
              buttonText="Product details"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProductsList;
