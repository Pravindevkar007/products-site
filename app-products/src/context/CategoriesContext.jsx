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
      name: "Organic Apple powder",
      description:
        "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
      image: product1,
      count: 10,
      products: [
        {
          id: 101,
          name: "Organic Apple powder",
          description:
            "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 102,
          name: "Organic Apple powder",
          description:
            "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 103,
          name: "Organic Apple powder",
          description:
            "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 104,
          name: "Organic Apple powder",
          description:
            "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 105,
          name: "Organic Apple powder",
          description:
            "Lactobacillus fermentum is a gram-positive bacterium, belonging to the Lactobacillus genus. It is commonly found in certain fermenting plant and animal-based materials. This Lactobacillus fermentum powder is basically a free-flowing, white to light-yellow coloured powder. It is known to aid urogenital infections in women.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 2,
      name: "Organic Fruits",
      description:
        " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product2,
      count: 23,
      products: [
        {
          id: 201,
          name: "Organic Fruits",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 202,
          name: "Organic Fruits",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 203,
          name: "Organic Fruits",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 204,
          name: "Organic Fruits",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 205,
          name: "Organic Fruits",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 3,
      name: "Organic Grains",
      description:
        " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product3,
      count: 14,
      products: [
        {
          id: 301,
          name: "Organic Grains",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 302,
          name: "Organic Grains",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 303,
          name: "Organic Grains",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 304,
          name: "Organic Grains",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 305,
          name: "Organic Grains",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 4,
      name: "Organic Dairy",
      description:
        " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product4,
      count: 13,
      products: [
        {
          id: 401,
          name: "Organic Dairy",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 402,
          name: "Organic Dairy",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 403,
          name: "Organic Dairy",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 404,
          name: "Organic Dairy",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 405,
          name: "Organic Dairy",
          description:
            " It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 5,
      name: "Organic Honey",
      description:
        "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product1,
      potency: "5 billion – 100 billion CFU/g",
      source: "Vegetables",
      packaging: "1 kg & 2 kg aluminum foil bags.",
      count: 40,
      products: [
        {
          id: 501,
          name: "Organic Honey",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 502,
          name: "Organic Honey",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 503,
          name: "Organic Honey",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 504,
          name: "Organic Honey",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 505,
          name: "Organic Honey",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product1,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 6,
      name: "Organic Tea & Coffee",
      description:
        "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product2,
      count: 25,
      products: [
        {
          id: 601,
          name: "Organic Tea & Coffee",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 602,
          name: "Organic Tea & Coffee",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 603,
          name: "Organic Tea & Coffee",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 604,
          name: "Organic Tea & Coffee",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 605,
          name: "Organic Tea & Coffee",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product2,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 7,
      name: "Organic Snacks",
      description:
        "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product3,
      count: 17,
      products: [
        {
          id: 701,
          name: "Organic Snacks",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 702,
          name: "Organic Snacks",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 703,
          name: "Organic Snacks",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 704,
          name: "Organic Snacks",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 705,
          name: "Organic Snacks",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product3,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
      ],
    },
    {
      id: 8,
      name: "Organic Beauty Products",
      description:
        "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
      image: product4,
      count: 30,
      products: [
        {
          id: 801,
          name: "Organic Beauty Products",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 802,
          name: "Organic Beauty Products",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 803,
          name: "Organic Beauty Products",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 804,
          name: "Organic Beauty Products",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
        },
        {
          id: 805,
          name: "Organic Beauty Products",
          description:
            "It aids weight management by keeping you satiated for a longer time and preventing hunger pangs that often otherwise lead to unhealthy snacking. It is good for type 2 diabetic patients as it reduces blood sugar levels in the bodies.",
          image: product4,
          potency: "5 billion – 100 billion CFU/g",
          source: "Vegetables",
          packaging: "1 kg & 2 kg aluminum foil bags.",
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
