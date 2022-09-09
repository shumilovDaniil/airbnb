import React, { useState } from "react";

import { GoSettings } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { CategoriesService } from "../../services/categories.service";
import TabsItem from "./TabsItem";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { data: response, isLoading } = useQuery(["categories"], () =>
    CategoriesService.getAll()
  );

  const onActiveTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="list  mb-6 text-[#848484] font-medium flex items-start gap-6 justify-between text-xs">
      <div className="flex justify-between overflow-x-auto flex-1 gap-7">
        {response?.data.map((category: any) => (
          <TabsItem
            key={category.id}
            {...category}
            onActiveTab={onActiveTab}
            activeTab={activeTab}
          />
        ))}
      </div>
      <button className="p-2 rounded-xl flex items-center gap-2 border-solid border-2 border-gray-500">
        <GoSettings /> Filters
      </button>
    </div>
  );
};

export default Tabs;
