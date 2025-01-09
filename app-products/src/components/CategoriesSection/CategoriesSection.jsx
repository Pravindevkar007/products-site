import React from "react";
import { Row, Col } from "react-bootstrap"; // For grid layout
import ProductCard from "@/components/ProductCard/ProductCard";
import product1 from "@/assets/Productcategory/pc1.jpg";
import product2 from "@/assets/Productcategory/pc2.jpg";
import product3 from "@/assets/Productcategory/pc3.jpg";
import product4 from "@/assets/Productcategory/pc4.jpg";

const CategoriesSection = () => {
  const handleMoreDetails = (categoryId) => {
    console.log(`Show details for category: ${categoryId}`);
  };

  const categories = [
    {
      id: 1,
      name: "Organic Vegetables",
      description: "Fresh and organic vegetables from local farms.",
      image: product1,
      count: 10,
    },
    {
      id: 2,
      name: "Organic Fruits",
      description: "Seasonal organic fruits, handpicked with care.",
      image: product2,
      count: 23,
    },
    {
      id: 3,
      name: "Organic Grains",
      description: "Whole grains and cereals grown organically.",
      image: product3,
      count: 14,
    },
    {
      id: 4,
      name: "Organic Dairy",
      description: "Milk, cheese, and butter from organic farms.",
      image: product4,
      count: 13,
    },
    {
      id: 5,
      name: "Organic Honey",
      description: "Pure organic honey, harvested with care.",
      image: product1,
      count: 40,
    },
    {
      id: 6,
      name: "Organic Tea & Coffee",
      description: "Delicious organic teas and coffees for a healthy start.",
      image: product2,
      count: 25,
    },
    {
      id: 7,
      name: "Organic Snacks",
      description: "Healthy organic snacks to munch on throughout the day.",
      image: product3,
      count: 17,
    },
    {
      id: 8,
      name: "Organic Beauty Products",
      description: "Natural and organic skincare and beauty products.",
      image: product4,
      count: 30,
    },
  ]; // Closing the categories array here

  return (
    <section id="categories" className="mid-section section">
      <h1>Product Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} md={3}>
            <ProductCard
              image={category.image}
              title={category.name}
              count={category.count}
              onClick={() => handleMoreDetails(category.id)}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategoriesSection;
