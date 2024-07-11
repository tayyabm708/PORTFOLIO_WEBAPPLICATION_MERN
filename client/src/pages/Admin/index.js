import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperience from "./AdminExperience";
import AdminProject from "./AdminProject";
import { useSelector } from "react-redux";
import AdminContact from "./AdminContact";

const items = [
  {
    key: "1",
    tab: "Intro",
    component: <AdminIntro />,
  },
  {
    key: "2",
    tab: "About",
    component: <AdminAbout />,
  },
  {
    key: "3",
    tab: "Experience",
    component: <AdminExperience />,
  },
  {
    key: "4",
    tab: "Projects",
    component: <AdminProject />,
  },
  {
    key: "5",
    tab: "Contact",
    component: <AdminContact />,
  },
];

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  const [activeTabKey, setActiveTabKey] = useState(items[0].key);

  const onChange = (key) => {
    setActiveTabKey(key);
  };

  const renderComponent = () => {
    const selectedTab = items.find((item) => item.key === activeTabKey);
    return selectedTab ? selectedTab.component : null;
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className=" flex gap-16 justify-between items-center px-5 py-2">
        <div className="flex gap-10 items-center">
          <h1 className="text-2xl px-5 pt-6 text-primary font-bold ">
            Portfolio Admin
          </h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>

        <button
          className=" text-white bg-primary  cursor-pointer rounded px-3 py-2 mr-4 "
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </button>
      </div>
      {portfolioData && (
        <div className="m-5 p-3 mt-1">
          <Tabs defaultActiveKey={items[0].key} onChange={onChange}>
            {items.map((item) => (
              <Tabs.TabPane key={item.key} tab={item.tab}>
                {item.key === activeTabKey && renderComponent()}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
