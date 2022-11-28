import React from "react";
const SearchGIF = require("../../../../../assets/images/search.gif");
var data = require("../../../../../Assets/Data/MOCK_DATA.json");

const Lokasi = (props: any) => {
  const { locationSelect, setLocationSelect } = props;

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLocationSelect((event.target as HTMLInputElement).value);
  };
  const onSearchList = (searchTerm: any) => {
    setLocationSelect(searchTerm);
  };

  return (
    // Filter Lokasi
    <div className="flex justify-center w-full">
      {/* Search GIF/Left */}
      <img className="h-10 rounded-r-xl" src={SearchGIF} alt="gif" />
      {/* Seach Input / Right */}
      <input
        className="w-[60%] h-10 border-none outline-none p-0 pl-2 text-xl font-[600] text-primary5 capitalize"
        type="text"
        name="search-beli"
        placeholder="Lokasi..."
        value={locationSelect}
        onChange={onChange}
      />
      {/* Search Result */}
      <div className="w-[433px] h-fit max-h-[200px] bg-white absolute translate-y-11 rounded-lg overflow-auto flex bg-clip-content flex-col z-50 scrollbar-hide">
        {data
          .filter((item: any) => {
            const searchTerm = locationSelect.toLowerCase();
            const place = item.place.toLowerCase();

            return (
              searchTerm && place.startsWith(searchTerm) && place !== searchTerm
            );
          })
          .slice(0, 20)
          .map((item: any) => (
            <div
              className="bg-clip-content list-none p-4 m-0 hover:bg-primary5 hover:text-white hover:font-bold hover:cursor-pointer"
              key={item.id}
              onClick={() => {
                onSearchList(item.place);
              }}
            >
              {item.place}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lokasi;
