import { useState } from "react";
import TabButton from "./TabButton";
import aboutTabsData from "../../data/aboutTabsData";
import AboutContentSection from "./AboutContentSection";

function AboutTabsSection() {
  const [activeTab, setActiveTab] = useState(aboutTabsData[0].key);
  const activeData = aboutTabsData.find(tab => tab.key === activeTab);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' }}>
        {aboutTabsData.map(tab => (
          <TabButton
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      <hr style={{ border: "none", borderBottom: "2px solid #e0e0e0", margin: "0 auto 1.5rem auto", width: "90%" }} />
      <AboutContentSection data={activeData} />
    </>
  );
}
export default AboutTabsSection;
