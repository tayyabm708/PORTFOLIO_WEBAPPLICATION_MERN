import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const {about} = portfolioData;
  const{lottieURL, description1, description2, skills} = about;
  
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[45vh] w-1/2 sm:w-full">
          <dotlottie-player
            src= {lottieURL || ''}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full sm:pt-5 text-justify">
          <p className="text-white">
            {description1 || ''}
          </p>
          <p className="text-white">
            {description2 || ''}
          </p>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-white text-xl sm:mb-5 mb-7">
          Here are few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 sm:gap-5 ">
            {skills.map((skill, index) => (
                <div className="border border-tertiary rounded py-3 px-7">
                    <h1 className="text-tertiary">{skill}</h1>
                </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default About;
