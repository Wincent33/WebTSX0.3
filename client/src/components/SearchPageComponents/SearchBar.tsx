import React, { useState, useRef } from "react";
const SearchGIF = require("../../assets/images/search.gif");
var data = require("../../assets/data/WilayahIndonesia.json");

const SearchBar = () => {
  var [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };
  const titleCase = (str: string) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const inputRef = useRef<any>(null);
  // const onChange = (e: any) => {
  //   setValue(e.target.value);
  // };
  const onSearchListClick = (searchTerm: string) => {
    // console.log(searchTerm);
    inputRef.current.value = searchTerm;
    setValue(inputRef.current.value);
  };
  let listDataProvinsi: any = [];
  data.forEach((provinsi: any) => {
    listDataProvinsi.push({
      provinsi: titleCase(provinsi.name),
    });
  });

  let listDataKabupaten: any = [];
  data.forEach((provinsi: any) => {
    provinsi.regencies.forEach((kabupaten: any) => {
      listDataKabupaten.push({
        provinsi: titleCase(provinsi.name),
        kabupaten: titleCase(kabupaten.name),
      });
    });
  });

  let listDataKecamatan: any = [];
  data.forEach((provinsi: any) => {
    provinsi.regencies.forEach((kabupaten: any) => {
      kabupaten.districts.forEach((kecamatan: any) => {
        listDataKecamatan.push({
          provinsi: titleCase(provinsi.name),
          kabupaten: titleCase(kabupaten.name),
          kecamatan: titleCase(kecamatan.name),
        });
      });
    });
  });

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
          {listDataProvinsi
            .filter((item: any) => {
              const searchTerm = value.toLowerCase();
              const place = item.provinsi.toLowerCase();
              return (
                searchTerm && place.includes(searchTerm) && place !== searchTerm
              );
            })
            .map((item: any) => (
              <div
                className="bg-clip-content w-full h-full list-none m-0 p-[15px] bg-white hover:bg-primary4 hover:text-white hover:font-bold hover:cursor-pointer"
                // key={item.id}
                onClick={() => {
                  onSearchListClick(item.provinsi);
                }}
              >
                {`${item.provinsi}`}
              </div>
            ))}
          {listDataKabupaten
            .filter((item: any) => {
              const searchTerm = value.toLowerCase();
              const place = item.kabupaten.toLowerCase();
              return (
                searchTerm && place.includes(searchTerm) && place !== searchTerm
              );
            })
            .slice(0, 4)
            .map((item: any) => (
              <div
                className="bg-clip-content w-full h-full list-none p-[15px] m-0 bg-white hover:bg-primary4 hover:text-white hover:font-bold hover:cursor-pointer"
                // key={item.id}
                onClick={() => {
                  // onSearchListClick(item.kabupaten+","+"");
                  onSearchListClick(`${item.kabupaten}, ${item.provinsi} `);
                }}
              >
                {`${item.kabupaten}, ${item.provinsi}`}
              </div>
            ))}
          {listDataKecamatan
            .filter((item: any) => {
              const searchTerm = value.toLowerCase();
              const place = item.kecamatan.toLowerCase();
              return (
                searchTerm && place.includes(searchTerm) && place !== searchTerm
              );
            })
            .slice(0, 4)
            .map((item: any) => (
              <div
                className="bg-clip-content w-full h-full list-none p-[15px] m-0 bg-white hover:bg-primary4 hover:text-white hover:font-bold hover:cursor-pointer"
                // key={item.id}
                onClick={() => {
                  onSearchListClick(
                    `${item.kecamatan}, ${item.kabupaten}, ${item.provinsi} `
                  );
                }}
              >
                {`${item.kecamatan}, ${item.kabupaten}, ${item.provinsi}`}
              </div>
            ))}
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
