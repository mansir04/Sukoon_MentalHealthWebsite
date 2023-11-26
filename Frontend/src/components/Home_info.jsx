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
    text: "In recent years, there has been increasing acknowledgement of the important role mental health plays in achieving global development goals.",
    link: "https://www.who.int/health-topics/mental-health#tab=tab_1",
  },
  {
    imageSrc:
      image2,
    title: "Take Our Diagnostic Quizzes",
    text: "WHO works with Member States and partners to improve the mental health of individuals and society at large.",
    link: "https://www.who.int/health-topics/mental-health#tab=tab_3",
  },
  {
    imageSrc:
      image3,
    title: "Mental Disorders",
    text: "In 2019, 1 in every 8 people, or 970 million people around the world were living with a mental disorder.",
    link: "https://who.int/news-room/fact-sheets/detail/mental-disorders",
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
                  target="_blank"
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
