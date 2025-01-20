import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useCategories } from "@/context/CategoriesContext";

const ProductsList = () => {
  const { id } = useParams();
  const { categories } = useCategories();
  const navigate = useNavigate();

  const category = categories.find((cat) => cat.id === parseInt(id));

  if (!category) return <p>Category not found</p>;

  return (
    <section className="mid-section">
      <div className="d-flex gap-4 pb-4 flex-column" style={{backgroundColor: "#e4f3ea"}}>
          <div className="d-flex align-items-start p-2">
            <strong>
             {category.name} : Premium Solutions for Digestive Health and
              Nutritional Support
            </strong>
          </div>
          <div className="d-flex p-2">
            <div className="text-start">
              {category.description}
            </div>
          </div>
        </div>
      <Row className="pt-3" >
        {category.products.map((product) => (
          <Col key={product.id} md={3}>
            <ProductCard
              image={product.image[0]}
              title={product.name}
              buttonText="Product details"
              onClick={() => navigate(`/product/${product.id}`)}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProductsList;
