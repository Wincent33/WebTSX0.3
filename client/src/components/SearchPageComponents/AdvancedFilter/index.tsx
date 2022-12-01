import React from "react";
import FilterContent from "./FilterContent/index";

function AdvancedFilter(props: any) {
  return props.trigger ? (
    // Filter PopUP
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-primary5 bg-opacity-20 flex justify-center items-center z-[2]">
      {/* Filter Inner */}
      <div className="relative p-8 w-full max-w-[640px] bg-white max-h-[500px] overflow-y-auto overflow-x-hidden rounded-[50px] z-[2] scrollbar-hide">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          Close
        </button>
        <FilterContent />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AdvancedFilter;
