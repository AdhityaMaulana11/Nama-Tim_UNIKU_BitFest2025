import { useState } from "react";
import TabButton from "./TabButton";
import aboutTabsData from "../../data/aboutTabsData";
import AboutContentSection from "./AboutContentSection";

export default function AboutTabsSection() {
  const [activeTab, setActiveTab] = useState(aboutTabsData[0].key);
  const activeData = aboutTabsData.find((tab) => tab.key === activeTab);

  return (
    <>
      {/* Tabs */}
      <div className="w-full my-6 px-4">
        <div
          className="
            flex flex-wrap justify-center gap-3 sm:gap-4
            md:flex-nowrap md:justify-center
          "
        >
          {aboutTabsData.map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-0 border-b-2 border-gray-300 w-[90%] mx-auto mb-6" />

      {/* Content */}
      <AboutContentSection data={activeData} />
    </>
  );
}
