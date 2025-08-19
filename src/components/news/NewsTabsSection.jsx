import { useState } from "react";
import NewsTabButton from "./NewsTabButton";
import newsTabsData from "../../data/newsTabsData";
import NewsContentSection from "./NewsContentSection";

export default function NewsTabsSection() {
  const [activeTab, setActiveTab] = useState(newsTabsData[0].key);
  const activeData = newsTabsData.find((tab) => tab.key === activeTab);

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
          {newsTabsData.map((tab) => (
            <NewsTabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </NewsTabButton>
          ))}
        </div>
      </div>

      {/* Divider kuning */}
      <hr className="border-0 border-b-2 border-yellow-500 w-[90%] mx-auto mb-6" />

      {/* Content Section */}
      <NewsContentSection data={activeData} />
    </>
  );
}