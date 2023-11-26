import React, { Component, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../images/home1-min.jpeg";
import image2 from "../images/home2-min.jpeg";
import image3 from "../images/home3-min.jpeg";

const contentData = [
  {
    imageSrc:
    image1,
    title: "Who We Are",
    text: "Discover more about our organization and learn about our mission and initiatives to make a positive impact on mental health and well-being.",
    link: "/Volunteer",
  },
  {
    imageSrc:
      image2,
    title: "Take Our Diagnostic Quizzes",
    text: "Discover our diagnostic quizzes designed to help you evaluate your mental well-being. Take a moment to explore and gain insights into your mental health.",
    link: "/Quiz",
  },
  {
    imageSrc:
      image3,
    title: "Mental Disorders",
    text: "Discover valuable insights into mental disorders and their impact on individuals and society. Explore our dedicated page to learn more about mental health challenges and ways to address them.",
    link: "/Articles",
  },
];

function TextWrapper({ children }) {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end "],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0.8]);
  const x = useTransform(scrollYProgress, [1, 0.6, 0], [0, 0, -1500]);

  return (
    <motion.div ref={text} className="text-section" style={{ opacity, x }}>
      {children}
    </motion.div>
  );
}

function Home_info() {
  return (
    <div className="container-home">
      {contentData.map((content, index) => (
        <div className="image-container-home" key={index}>
          <TextWrapper>
            <img
              src={content.imageSrc}
              alt={content.title}
              className="image-home"
            />
          </TextWrapper>
          <div className="text-container-home">
            <TextWrapper>
              <div className="text-box-home">
                <h2>{content.title}</h2>
                <p>{content.text}</p>
                <a
                  href={content.link}
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </TextWrapper>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home_info;
