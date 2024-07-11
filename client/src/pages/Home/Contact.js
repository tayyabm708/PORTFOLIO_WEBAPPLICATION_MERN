import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";


function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  // Function to filter out keys you don't want to display
  const filteredKeys = ["_id", "url"];
  const filteredContact = Object.keys(contact)
    .filter((key) => !filteredKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = contact[key];
      return obj;
    }, {});

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(filteredContact).map((key) => (
            <h1 key={key} className="ml-6">
              <span className="text-tertiary text-sm">{key} : </span>
              <span className="text-tertiary text-sm">{filteredContact[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-[350px]">
          <dotlottie-player
            src={contact.url}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
