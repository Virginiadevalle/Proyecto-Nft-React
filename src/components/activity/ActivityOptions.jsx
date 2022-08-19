import React, { useState } from "react";

const tabs = [
  {
    tab: "Sales",
    label: "Sales",
  },
  {
    tab: "Likes",
    label: "Likes",
  },
  {
    tab: "Purchase",
    label: "Purchase",
  },
  {
    tab: "Bids",
    label: "Bids",
  },
  {
    tab: "Burns",
    label: "Burns",
  },
  {
    tab: "Transfer",
    label: "Transfer",
  },
  {
    tab: "Followings",
    label: "Followings",
  },
];

function ActivityOptions() {
  const [tab, setTab] = useState("");
  return (
    <>
      <div className="contain-titulo-menu d-flex flex-column justify-content-center mw-300 m-auto ">
        <h3 className="text-white after mb-4 mt-5 mt-lg-0">Filters</h3>
        <div className="menu-explore flex-wrap d-flex flex-lg-row  text-justify p-0 ">
          {tabs.map((item) => (
            <button
              key={item.tab}
              onClick={() => setTab(item.tab)}
              className={`${
                tab === item.tab ? "active" : ""
              } mb-3  btn py-1 btn-outline-secondary text-gris  px-3 me-2`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActivityOptions;
