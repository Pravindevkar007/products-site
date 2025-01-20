import React, { useEffect, useRef } from "react";
import classes from "@/components/HomeSection/HomeSection.module.scss";
import clsx from "clsx";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import CountriesSection from "@/components/CountriesSection/CountriesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import CarouselSection from "@/components/HomeSection/CarouselSection";

const HomeSection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
          } else {
            entry.target.classList.remove(classes.visible);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="home">
      <div className={clsx(classes["animated-section"], classes.visible)} ref={(el) => (sectionRefs.current[0] = el)}>
        <CarouselSection />
      </div>
      <div className={clsx(classes["animated-section"])} ref={(el) => (sectionRefs.current[1] = el)}>
        <CategoriesSection />
      </div>
      <div className={clsx(classes["animated-section"])} ref={(el) => (sectionRefs.current[2] = el)}>
        <CountriesSection />
      </div>
      <div className={clsx(classes["animated-section"])} ref={(el) => (sectionRefs.current[3] = el)}>
        <ContactSection />
      </div>
    </section>
  );
};

export default HomeSection;
