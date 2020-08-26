import React from "react";
import "./tabStyles.scss";
import TabTitle from "./tabTitle";
import TabPanel from "./tabPanel";

const Tabs = () => {
  return (
    <>
      <div className="app-tab-layout">
        <TabTitle title="apple" disabled />
        <TabTitle title="banana" />
        <TabTitle title="cherry" />
      </div>
      <div>
        <TabPanel content={"apples are great"} active />
        <TabPanel content={"bananas are great"} />
        <TabPanel content={"cherries are great"} />
      </div>
    </>
  );
};

export default Tabs;
