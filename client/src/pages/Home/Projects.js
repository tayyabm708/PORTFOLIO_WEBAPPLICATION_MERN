import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const {  portfolioData } = useSelector((state) => state.root);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {projects} = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0fba95] w-full sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-60"
          />
          <div className="flex flex-col gap-5 text-justify">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="text-white">
              {projects[selectedItemIndex].description}
            </h1>
            <button className="border-2 border-tertiary text-tertiary px-0 py-2 rounded-sm w-full  ">
              <a href={projects[selectedItemIndex].link}>See More...</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
