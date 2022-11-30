import React, { useState } from "react";
import SearchBar from "./SearchBar";
import QuickFilters from "./QuickFilters";
import AdvancedFilter from "./AdvancedFilter";
function Search1() {
  const [trigger, setTrigger] = useState(false);
  return (
    // Search 1
    <>
    <div className="flex flex-col w-full sticky top-0 bottom-2">
      {/* SearchBar */}
      <div className="flex flex-row w-full bg-primary1">
        <SearchBar />
        {/* Advanced Filter Button */}
        <button
          className="bg-transparent border-white border-solid border-[2px] rounded-2xl text-white duration-300 hover:scale-110 hover:cursor-pointer hover:bg-primary4 hover:shadow-[10px_17px_21px_-2px_rgba(0,0,0,67%)]"
          onClick={() => setTrigger(true)}
        >
          Advanced Filter
        </button>
        </div>
      <QuickFilters />
    </div>
    <AdvancedFilter trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}

export default Search1;
