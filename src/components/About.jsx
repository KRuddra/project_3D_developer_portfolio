import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}><a>About Me.</a>&nbsp;
          <a href="https://linkedin.com/in/ruddra-kantaria" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-1x">&nbsp;</i>
          </a>
          <a href="https://github.com/KRuddra" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-1x">&nbsp;</i>
          </a>
          <a href="https://github.com/KRuddra" target="_blank" rel="noopener noreferrer">
          <i class="fa-regular fa-file">&nbsp;</i>
          </a>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hey! My name is Ruddra Kantaria, and I am a first year 
        student at the University of Waterloo pursuing Computer Science. 
        At the moment, I am working on full-stack development, as well as  
        diving into the depths of machine learning, LLM development add Quantum Computing.
        I am currently seeking Summer 2025 internships!
        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (
    <a 
      key={service.title} 
      href={service.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="service-card-link"
    >
      <ServiceCard index={index} {...service} />
    </a>
  ))}
</div>

    </>
  );
};



export default SectionWrapper(About, "about");