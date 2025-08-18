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
      <div className="flex justify-center gap-4 my-6">
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

      {/* Divider */}
      <hr className="border-0 border-b-2 border-gray-300 w-[90%] mx-auto mb-6" />

      {/* Content */}
      <AboutContentSection data={activeData} />
    </>
  );
}
