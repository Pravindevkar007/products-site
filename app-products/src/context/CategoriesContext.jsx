// src/context/CategoriesContext.jsx
import React, { createContext, useContext } from "react";
import product1 from "@/assets/Productcategory/pc1.jpg";
import product2 from "@/assets/Productcategory/pc2.jpg";
import product3 from "@/assets/Productcategory/pc3.jpg";
import product4 from "@/assets/Productcategory/pc4.jpg";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const categories = [
    {
      id: 1,
      name: "Organic Vegetables",
      description: "Fresh and organic vegetables from local farms.",
      image: product1,
      count: 10,
      products: [
        {
          id: 1,
          name: "Organic Vegetables",
          description: "Fresh and organic vegetables from local farms.",
          image: product1,
        },
        {
          id: 2,
          name: "Organic Vegetables",
          description: "Fresh and organic vegetables from local farms.",
          image: product1,
        },
        {
          id: 3,
          name: "Organic Vegetables",
          description: "Fresh and organic vegetables from local farms.",
          image: product1,
        },
        {
          id: 4,
          name: "Organic Vegetables",
          description: "Fresh and organic vegetables from local farms.",
          image: product1,
        },
        {
          id: 5,
          name: "Organic Vegetables",
          description: "Fresh and organic vegetables from local farms.",
          image: product1,
        },
      ],
    },
    {
      id: 2,
      name: "Organic Fruits",
      description: "Seasonal organic fruits, handpicked with care.",
      image: product2,
      count: 23,
      products: [
        {
          id: 1,
          name: "Organic Fruits",
          description: "Seasonal organic fruits, handpicked with care.",
          image: product2,
        },
        {
          id: 2,
          name: "Organic Fruits",
          description: "Seasonal organic fruits, handpicked with care.",
          image: product2,
        },
        {
          id: 3,
          name: "Organic Fruits",
          description: "Seasonal organic fruits, handpicked with care.",
          image: product2,
        },
        {
          id: 4,
          name: "Organic Fruits",
          description: "Seasonal organic fruits, handpicked with care.",
          image: product2,
        },
        {
          id: 5,
          name: "Organic Fruits",
          description: "Seasonal organic fruits, handpicked with care.",
          image: product2,
        },
      ],
    },
    {
      id: 3,
      name: "Organic Grains",
      description: "Whole grains and cereals grown organically.",
      image: product3,
      count: 14,
      products: [
        {
          id: 1,
          name: "Organic Grains",
          description: "Whole grains and cereals grown organically.",
          image: product3,
        },
        {
          id: 2,
          name: "Organic Grains",
          description: "Whole grains and cereals grown organically.",
          image: product3,
        },
        {
          id: 3,
          name: "Organic Grains",
          description: "Whole grains and cereals grown organically.",
          image: product3,
        },
        {
          id: 4,
          name: "Organic Grains",
          description: "Whole grains and cereals grown organically.",
          image: product3,
        },
        {
          id: 5,
          name: "Organic Grains",
          description: "Whole grains and cereals grown organically.",
          image: product3,
        },
      ],
    },
    {
      id: 4,
      name: "Organic Dairy",
      description: "Milk, cheese, and butter from organic farms.",
      image: product4,
      count: 13,
      products: [
        {
          id: 1,
          name: "Organic Dairy",
          description: "Milk, cheese, and butter from organic farms.",
          image: product4,
        },
        {
          id: 2,
          name: "Organic Dairy",
          description: "Milk, cheese, and butter from organic farms.",
          image: product4,
        },
        {
          id: 3,
          name: "Organic Dairy",
          description: "Milk, cheese, and butter from organic farms.",
          image: product4,
        },
        {
          id: 4,
          name: "Organic Dairy",
          description: "Milk, cheese, and butter from organic farms.",
          image: product4,
        },
        {
          id: 5,
          name: "Organic Dairy",
          description: "Milk, cheese, and butter from organic farms.",
          image: product4,
        },
      ],
    },
    {
      id: 5,
      name: "Organic Honey",
      description: "Pure organic honey, harvested with care.",
      image: product1,
      count: 40,
      products: [
        {
          id: 1,
          name: "Organic Honey",
          description: "Pure organic honey, harvested with care.",
          image: product1,
        },
        {
          id: 2,
          name: "Organic Honey",
          description: "Pure organic honey, harvested with care.",
          image: product1,
        },
        {
          id: 3,
          name: "Organic Honey",
          description: "Pure organic honey, harvested with care.",
          image: product1,
        },
        {
          id: 4,
          name: "Organic Honey",
          description: "Pure organic honey, harvested with care.",
          image: product1,
        },
        {
          id: 5,
          name: "Organic Honey",
          description: "Pure organic honey, harvested with care.",
          image: product1,
        },
      ],
    },
    {
      id: 6,
      name: "Organic Tea & Coffee",
      description: "Delicious organic teas and coffees for a healthy start.",
      image: product2,
      count: 25,
      products: [
        {
          id: 1,
          name: "Organic Tea & Coffee",
          description:
            "Delicious organic teas and coffees for a healthy start.",
          image: product2,
        },
        {
          id: 2,
          name: "Organic Tea & Coffee",
          description:
            "Delicious organic teas and coffees for a healthy start.",
          image: product2,
        },
        {
          id: 3,
          name: "Organic Tea & Coffee",
          description:
            "Delicious organic teas and coffees for a healthy start.",
          image: product2,
        },
        {
          id: 4,
          name: "Organic Tea & Coffee",
          description:
            "Delicious organic teas and coffees for a healthy start.",
          image: product2,
        },
        {
          id: 5,
          name: "Organic Tea & Coffee",
          description:
            "Delicious organic teas and coffees for a healthy start.",
          image: product2,
        },
      ],
    },
    {
      id: 7,
      name: "Organic Snacks",
      description: "Healthy organic snacks to munch on throughout the day.",
      image: product3,
      count: 17,
      products: [
        {
          id: 1,
          name: "Organic Snacks",
          description: "Healthy organic snacks to munch on throughout the day.",
          image: product3,
        },
        {
          id: 2,
          name: "Organic Snacks",
          description: "Healthy organic snacks to munch on throughout the day.",
          image: product3,
        },
        {
          id: 3,
          name: "Organic Snacks",
          description: "Healthy organic snacks to munch on throughout the day.",
          image: product3,
        },
        {
          id: 4,
          name: "Organic Snacks",
          description: "Healthy organic snacks to munch on throughout the day.",
          image: product3,
        },
        {
          id: 5,
          name: "Organic Snacks",
          description: "Healthy organic snacks to munch on throughout the day.",
          image: product3,
        },
      ],
    },
    {
      id: 8,
      name: "Organic Beauty Products",
      description: "Natural and organic skincare and beauty products.",
      image: product4,
      count: 30,
      products: [
        {
          id: 1,
          name: "Organic Beauty Products",
          description: "Natural and organic skincare and beauty products.",
          image: product4,
        },
        {
          id: 2,
          name: "Organic Beauty Products",
          description: "Natural and organic skincare and beauty products.",
          image: product4,
        },
        {
          id: 3,
          name: "Organic Beauty Products",
          description: "Natural and organic skincare and beauty products.",
          image: product4,
        },
        {
          id: 4,
          name: "Organic Beauty Products",
          description: "Natural and organic skincare and beauty products.",
          image: product4,
        },
        {
          id: 5,
          name: "Organic Beauty Products",
          description: "Natural and organic skincare and beauty products.",
          image: product4,
        },
      ],
    },
  ];

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);

export default CategoriesProvider;
