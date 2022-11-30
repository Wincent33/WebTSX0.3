import React, { useState, useRef } from "react";
const SearchGIF = require("../../assets/images/search.gif");
var data = require("../../assets/data/MOCK_DATA.json");

type Provinsi = {
  name: string;
  listKota: Kota[];
};

type Kecamatan = {
  name: string;
};
type Kota = {
  name: string;
  listKecamatan: Kecamatan[];
};

const listProvinsi: Provinsi[] = [
  {
    name: "Jakarta",
    listKota: [
      {
        name: "Jaksel",
        listKecamatan: [{ name: "Thamrin" }, { name: "Kuningan" }],
      },
      {
        name: "Jaktim",
        listKecamatan: [{ name: "Cakung" }, { name: "Tipar" }],
      },
    ],
  },
  {
    name: "Jawa Barat",
    listKota: [
      {
        name: "Kota Bekasi",
        listKecamatan: [{ name: "Medan Satria" }, { name: "Tarumajaya" }],
      },
      {
        name: "Kota Bandung",
        listKecamatan: [{ name: "Dago" }, { name: "Lembang" }],
      },
    ],
  },
];

type MyListComponent = {
  provinsi: string;
  kota: string;
  kecamatan: string;
};
const listData: MyListComponent[] = [];
listProvinsi.forEach((provinsi) => {
  provinsi.listKota.forEach((kota) => {
    kota.listKecamatan.forEach((kecamatan) => {
      listData.push({
        provinsi: provinsi.name,
        kota: kota.name,
        kecamatan: kecamatan.name,
      });
    });
  });
});
// console.log(listData.map((d) => `${d.kecamatan}, ${d.kota}, ${d.provinsi}`));

const SearchBar = () => {
  var [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  const inputRef = useRef<any>(null);

  const OnSearchListClick = (searchTerm: string) => {
    // console.log(searchTerm);
    inputRef.current.value = searchTerm;
    setValue(searchTerm);
  };
  const SearchResult = data
    .filter((item: any) => {
      const searchTerm = value.toLowerCase();
      const place = item.place.toLowerCase();
      return searchTerm && place.startsWith(searchTerm) && place !== searchTerm;
    })
    .slice(0, 20)
    .map((item: any) => (
      // Location
      <div
        className="bg-clip-content list-none p-4 m-0 hover:bg-primary5 hover:text-white hover:font-bold hover:cursor-pointer"
        key={item.id}
        onClick={() => OnSearchListClick(item.place)}
      >
        {item.place}
      </div>
    ));
  return (
    // Advanced SearchBar
    <section className="m-0">
      {/* Search Box */}
      <div className="flex justify-start bg-primary1 py-1 px-12">
        {/* Search GIF */}
        <img
          className="h-10 w-10 rounded-l-lg"
          src={SearchGIF}
          alt="gif"
          height={"50px"}
        />
        {/* Search Text */}
        <input
          className="w-[500px] h-10 border-none outline-none p-0 text-xl capitalize"
          type="text"
          placeholder="Ketik Lokasi..."
          value={value}
          onChange={handleOnChange}
          ref={inputRef}
        />
        {/* Search Button Bg */}
        <div className="m-0 h-10 flex bg-white items-center rounded-r-lg ">
          {/* Search Button */}
          <button className="rounded-lg h-7 w-20 mr-1 bg-primary5 text-white font-semibold border-primary5 border-[2px] hover:bg-primary4 hover:translate-y-[1px] hover:translate-x-[1px]">
            CARI
          </button>
        </div>
        {/* Search Result */}
        <div className="w-[620px] h-fit max-h-52 bg-white absolute translate-y-[45px] rounded-lg overflow-auto flex box-content flex-col scrollbar-hide">
          {SearchResult}
        </div>
        {/* Filters */}
        <section className="m-1 flex flex-col justify-around items-center"></section>
      </div>
    </section>
  );
};

//   .item {
//     background-color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 40px;
//     width: fit-content;
//     border-radius: 5px;
//     padding: 0px 20px;
//     margin: 0px 5px;
//     .item-text {
//       font-size: 16px;
//     }
export default SearchBar;
