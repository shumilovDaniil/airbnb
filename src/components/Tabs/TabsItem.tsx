import React, { FC } from "react";

interface ITabsItem {
  name: string;
  id: number;
  icon: string;
  activeTab: number;
  onActiveTab: (id: number) => void;
}

const TabsItem: FC<ITabsItem> = ({
  name,
  id,
  icon,
  activeTab,
  onActiveTab,
}) => {
  if (activeTab === id) {
    return (
      <div
        onClick={() => onActiveTab(id)}
        className="item pb-3 cursor-pointer px-4 border-black border-solid border-b-2"
      >
        <div className="flex flex-col items-center text-[#2e2e2e]">
          <img className="mb-1" src={icon} width="20px" height="20px" alt="" />
          <h4>{name}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => onActiveTab(id)}
        className="item pb-3  cursor-pointer px-4"
      >
        <div className="flex flex-col items-center text-[#2e2e2e]">
          <img className="mb-1" src={icon} width="20px" height="20px" alt="" />
          <h4>{name}</h4>
        </div>
      </div>
    );
  }
};

export default TabsItem;
