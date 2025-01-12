import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner2 from "@/assets/Home/Banner_2.jpg";
import Banner1 from "@/assets/Home/Banner_1.jpg";
import Banner3 from "@/assets/Home/Banner_3.jpg";
import classes from "@/components/HomeSection/HomeSection.module.scss";
import clsx from "clsx";

const CarouselSection = () => {
  return (
    <Carousel interval={1500} pause="hover" fade>
      <Carousel.Item>
        <img
          className={clsx(classes["carousel-image"], "d-block w-100")}
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Research & Development Support</h3>
          <p>
            An app designed to enhance R&D efforts for organic product
            development, offering tools for project management, resource
            allocation, data tracking, and collaboration, all aimed at driving
            innovation in sustainable, organic solutions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={clsx(classes["carousel-image"], "d-block w-100")}
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-black">FSSC Certified</h3>
          <p className="text-black">
            We are FSSC certified, ensuring that our organic products meet the
            highest standards of food safety and quality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={clsx(classes["carousel-image"], "d-block w-100")}
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-black">EU Certified</h3>
          <p className="text-black">
            We are EU certified, guaranteeing that our organic products comply
            with European Union standards for quality, safety, and
            sustainability.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
