import React, { useState, useEffect } from "react";
import "./tabStyles.scss";
import TabTitle from "./tabTitle";
import TabPanel from "./tabPanel";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("apple");
  useEffect(() => {
    setActiveTab("banana");
  }, []);
  return (
    <>
      <div className="app-tab-layout">
        <TabTitle
          title="apple"
          disabled
          onClick={() => setActiveTab("apple")}
        />
        <TabTitle
          title="banana"
          onClick={() => {
            console.log("here");
            setActiveTab("banana");
          }}
        />
        <TabTitle title="cherry" onClick={() => setActiveTab("cherry")} />
      </div>
      <div>
        <TabPanel content={"apples are great"} active={activeTab === "apple"} />
        <TabPanel
          content={"bananas are great"}
          active={activeTab === "banana"}
        />
        <TabPanel
          content={"cherries are great"}
          active={activeTab === "cherry"}
        />
      </div>
    </>
  );
};

export default Tabs;
