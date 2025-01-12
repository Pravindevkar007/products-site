import React from "react";
import classes from "@/components/HomeSection/HomeSection.module.scss";
import clsx from "clsx";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import CountriesSection from "@/components/CountriesSection/CountriesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import CarouselSection from "@/components/HomeSection/CarouselSection";

const HomeSection = () => {
  return (
    <section id="home" className={clsx(classes["section"])}>
      <CarouselSection />
      <CategoriesSection />
      <CountriesSection />
      <ContactSection />
    </section>
  );
};

export default HomeSection;
