import React, { useState, useRef } from "react";
const SearchGIF = require("../../../../assets/images/search.gif");
var data = require("../../../../assets/data/WilayahIndonesia.json");

const Lokasi = (props: any) => {
  // const { locationSelect, setLocationSelect } = props;
  const [value, setValue] = useState("");
  const titleCase = (str: string) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSearchListClick = (searchTerm: any) => {
    inputRef.current.value = searchTerm;
    setValue(inputRef.current.value);
  };

  const inputRef = useRef<any>(null);
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
    // Filter Lokasi
    <div className="flex justify-center mx-auto w-fit border-black border-solid rounded-xl border-[1px]">
      {/* Search GIF/Left */}
      <img className="h-10 rounded-r-xl" src={SearchGIF} alt="gif" />
      {/* Seach Input / Right */}
      <input
        className="w-[60%] h-10 border-none outline-none p-0 pl-2 text-xl font-[600] text-primary5 capitalize"
        type="text"
        name="search-beli"
        placeholder="Lokasi..."
        value={value}
        onChange={onChange}
      />
      {/* Search Result */}
      <div className="w-[433px] h-fit max-h-[200px] bg-white absolute translate-y-11 rounded-lg overflow-auto flex bg-clip-content flex-col z-50 scrollbar-hide">
        {listDataProvinsi
          .filter((item: any) => {
            const searchTerm = value.toLowerCase();
            const place = item.provinsi.toLowerCase();
            console.log();
            return (
              searchTerm && place.includes(searchTerm) && place !== searchTerm
            );
          })
          .map((item: any) => (
            <div
              className="location"
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
              className="location"
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
              className="location"
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
    </div>
  );
};

export default Lokasi;
