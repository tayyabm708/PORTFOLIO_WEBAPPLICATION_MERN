import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const {  portfolioData } = useSelector((state) => state.root);

  const {experiences} = portfolioData;
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0fba95] w-full sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2bae662f] py-3"
                      : "text-white"
                  }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 text-justify">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-white">
            {experiences[selectedItemIndex].description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
