import { useState, useRef } from "react";
// import Select from "react-select";
// import "./style.scss";
// import SearchGIF from "../../../assets/images/search.gif";
// import SearchGIF from "../../../assets/images/search.gif";
// import SearchGIF from "../../../assets/images/search.gif";
// import WilayahIndo from "../../../Assets/Data/WilayahIndonesia.json";
var SearchGIF = require("../../../assets/images/search.gif");
var data = require("../../../assets/data/WilayahIndonesia.json");
export default function HomeSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const titleCase = (str: string) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  const handleTabOnClick = (index: number) => () => {
    setActiveTab(index);
  };
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSearchBtn = (value: any) => {
    activeTab === 0 ? console.log(value, "hi1") : console.log(value, "hi2");
  };
  const onSearchListClick = (searchTerm: any) => {
    inputRef.current.value = searchTerm;
    setValue(inputRef.current.value);
    activeTab === 0
      ? console.log(searchTerm, "hi1")
      : console.log(searchTerm, "hi2");
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
    <section className="h-fit flex items-center m-0">
      <div className="flex flex-col relative w-[600px] drop-shadow(7px_7px_3px_black) h-[150px] my-0 mx-auto p-0 break-all border-none rounded-[20px] z-7 translate-y-[-20px] ">
        <section className="flex justify-center gap-[15px]">
          <button
            className={activeTab === 0 ? "text-center bg-transparent  cursor-pointer box-content relative outline-none text-[rgb(164,164,164)] border-b-[1px] border-solid before:contents-[''] before:block before:absolute before:bottom-[-5px] before:left-[50%] translate-x-[-50%] w-[90%] h-" : "text-center bg-transparent w-[20%] cursor-pointer box-content relative outline-none text-[rgb(164,164,164)]"}
            onClick={handleTabOnClick(0)}
          >
            BELI
          </button>
          <button
            className={activeTab === 1 ? "tabs active-tabs" : ""}
            onClick={handleTabOnClick(1)}
          >
            SEWA
          </button>
        </section>

        <div className="grow">
          <div className="w-[100%] h-[80%] hidden justify-center items-center">
            <div className="search-box">
              <div className="search-box">
                <img className="search-gif" src={SearchGIF} alt="gif" />
                <input
                  className="search-beli"
                  type="text"
                  name="search-beli"
                  placeholder="Lokasi..."
                  value={value}
                  onChange={onChange}
                  ref={inputRef}
                  autoComplete="off"
                />
                <div className="search-button-bg">
                  <button
                    className="search-button"
                    onClick={() => onSearchBtn(value)}
                  >
                    CARI
                  </button>
                </div>
                <div className="search-result">
                  {listDataProvinsi
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.provinsi.toLowerCase();
                      console.log();
                      return (
                        searchTerm &&
                        place.includes(searchTerm) &&
                        place !== searchTerm
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
                        searchTerm &&
                        place.includes(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 4)
                    .map((item: any) => (
                      <div
                        className="location"
                        // key={item.id}
                        onClick={() => {
                          onSearchListClick(item.kabupaten);
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
                        searchTerm &&
                        place.includes(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 4)
                    .map((item: any) => (
                      <div
                        className="location"
                        // key={item.id}
                        onClick={() => {
                          onSearchListClick(item.kecamatan);
                        }}
                      >
                        {`${item.kecamatan}, ${item.kabupaten}, ${item.provinsi}`}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
