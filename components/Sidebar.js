import React from "react";
import Search from "./Search";
import Subscribe from "./Subscribe";
function Sidebar() {
  return (
    <div className="p-4 overflow-y-auto rounded-md shadow-sm bg-gray-200 dark:bg-gray-800">
      <div className="space-y-2">
        <div className="pb-5 pt-2">
          <Search />
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
