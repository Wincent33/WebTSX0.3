import React, { useState } from "react";
import SearchBar from "./SearchBar";
import QuickFilters from "./QuickFilters";
import AdvancedFilter from "./AdvancedFilter";

function Search1() {
  const [trigger, setTrigger] = useState(false);

  const Test = () => {
    return trigger ? (
      <div className="text-white text-3xl">
        Hello Bro{" "}
        <button
          className="bg-primary4"
          onClick={() => {
            setTrigger(false);
          }}
        >
          Close
        </button>
      </div>
    ) : (
      <></>
    );
  };

  return (
    // Search 1
    <div className="w-full bg-white">
      <div className="flex flex-col max-w-[1200px] w-full mx-auto ">
        {/* SearchBar */}
        <div className="flex flex-row w-full bg-white">
          <SearchBar />
          {/* Advanced Filter Button */}
          <button
            className="bg-primary1 px-3 rounded-lg my-1 text-white font-medium text-xl duration-300 hover:scale-110 hover:cursor-pointer hover:bg-primary4 hover:shadow-[10px_17px_21px_-2px_rgba(0,0,0,67%)]"
            onClick={() => {
              setTrigger(true);
              console.log("pressed" + trigger);
            }}
          >
            Advanced Filter
          </button>
        </div>
        <QuickFilters />
        <AdvancedFilter trigger={trigger} setTrigger={setTrigger} />
      </div>
    </div>
  );
}

export default Search1;
