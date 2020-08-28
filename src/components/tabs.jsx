import React, { useState, useEffect } from "react";
import "./chewy-tabs.css";
import "./tabStyles.scss";
import TabTitle from "./tabTitle";
import TabPanel from "./tabPanel";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("apple");
  useEffect(() => {
    setActiveTab("banana");
  }, []);
  return (
    <section className="app">
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
      <div className="app-tab-layout">
        <TabTitle
          title="apple"
          disabled
          onClick={() => setActiveTab("apple")}
        />
        <TabTitle title="banana" onClick={() => setActiveTab("banana")} />
        <TabTitle title="cherry" onClick={() => setActiveTab("cherry")} />
      </div>
    </section>
  );
};

export default Tabs;
