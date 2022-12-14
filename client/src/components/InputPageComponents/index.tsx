import React, { useState } from "react";
import ReviewPopUP from "./ReviewPopUpContent";
import Judul from "./components/Judul";
import NamaProperti from "./components/NamaProperti";
import Deskripsi from "./components/Deskripsi";
import Developer from "./components/Developer.jsx";
import JenisProperti from "./components/JenisProperti.jsx";
import Harga from "./components/Harga.jsx";
import JenisSertifikat from "./components/JenisSertifikat.jsx";
import Furnished from "./components/Furnished.jsx";
import ProvinsiSelect from "./components/ProvinsiSelect.jsx";
import KabupatenSelect from "./components/KabupatenSelect.jsx";
import KecamatanSelect from "./components/KecamatanSelect.jsx";
import LTLB from "./components/LTLB.jsx";
import FasilitasProperti from "./components/FasilitasProperti.jsx";
import Lokasi from "./components/Lokasi";
import Zona from "./components/Zona.jsx";
import ImagesUpload from "./components/ImagesUpload.jsx";
import JumlahDetail from "./components/JumlahDetail";
import Listrik from "./components/Listrik";
import BeliSewa from "./components/BeliSewa";
import Orientasi from "./components/Orientasi";
import FasilitasSekitar from "./components/FasilitasSekitar";
import TahunBangun from "./components/TahunBangun";

const InputForm = () => {
  const formInnit = {
    status: "dijual",
    judul: "blank title",
    developer: null,
    devLogo: null,
    deskripsiProperti: "",
    namaProperti: "",
    alamat: "",
    provinsi: { value: "", label: "" },
    kabupaten: { province_id: "", value: "", label: "" },
    kecamatan: { regency_id: "", value: "", label: "" },
    jenisProperti: { value: "", label: "" },
    harga: 0,
    jenisSertifikat: "",
    cicilan: 0,
    imagesURLs: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    isFurnished: null,
    luasTanah: 0,
    luasBangunan: 0,
    lantai: 0,
    parkir: 0,
    kamarTidur: 0,
    kamarMandi: 0,
    fasilitasSekitar: [],
    fasilitasProperti: [],
    zona: null,
    orientasi: "",
    isYard: false,
    listrik: null,
    tahunBangun: 2024,
  };
  const [formValue, setFormValue] = useState(formInnit);
  const [reviewPopUp, setReviewPopUp] = useState(false);
  const [images, setImages] = useState([]);
  function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  }
  const innitDevlogo =
    "https://seeklogo.com/images/L/Lorem_Ipsum-logo-1662AFAE6D-seeklogo.com.png";
  return (
    <div className="w-full h-[1300px] overflow-hidden">
      <form className="flex flex-row justify-between">
        {/* Form Left */}
        <div className="mx-5 mt-5 flex flex-col gap-2 w-[40%]">
          <BeliSewa formValue={formValue} setFormValue={setFormValue} />
          <Judul formValue={formValue} setFormValue={setFormValue} />
          <NamaProperti formValue={formValue} setFormValue={setFormValue} />
          <Deskripsi formValue={formValue} setFormValue={setFormValue} />
          <Developer formValue={formValue} setFormValue={setFormValue} />
          <Lokasi formValue={formValue} setFormValue={setFormValue} />
          <ProvinsiSelect formValue={formValue} setFormValue={setFormValue} />
          {formValue.provinsi.value !== "" ? (
            <KabupatenSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
          ) : (
            <></>
          )}

          {formValue.kabupaten.value !== "" ? (
            <KecamatanSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
          ) : (
            <></>
          )}
          <JenisProperti formValue={formValue} setFormValue={setFormValue} />
          <Harga formValue={formValue} setFormValue={setFormValue} />
          <JenisSertifikat formValue={formValue} setFormValue={setFormValue} />
          <ImagesUpload
            images={images}
            setImages={setImages}
            // setImageURLs={setImageURLs}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        </div>
        <div className="mx-5 mt-5 flex flex-col gap-2 w-[40%]">
          <Furnished formValue={formValue} setFormValue={setFormValue} />
          <JumlahDetail formValue={formValue} setFormValue={setFormValue} />
          <LTLB formValue={formValue} setFormValue={setFormValue} />
          <FasilitasProperti
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <FasilitasSekitar formValue={formValue} setFormValue={setFormValue} />
          <Zona formValue={formValue} setFormValue={setFormValue} />
          <Orientasi formValue={formValue} setFormValue={setFormValue} />
          <div>
            <Listrik formValue={formValue} setFormValue={setFormValue} />
            <TahunBangun formValue={formValue} setFormValue={setFormValue} />
          </div>
          <div className="review-submit">
            <button
              className="mx-2 bg-primary4 px-4 py-1"
              onClick={(e) => {
                e.preventDefault();
                setReviewPopUp(true);
              }}
            >
              Review
            </button>
            <ReviewPopUP
              lantai={formValue.lantai}
              trigger={reviewPopUp}
              setTrigger={setReviewPopUp}
              harga={formValue.harga}
              judul={formValue.judul}
              images={formValue.imagesURLs}
              cicilan={21}
              luasBangunan={formValue.luasBangunan}
              luasTanah={formValue.luasTanah}
              jumlahKamar={formValue.kamarTidur}
              jumlahParkir={formValue.parkir}
              jumlahWC={formValue.kamarMandi}
              devLogo={
                formValue.devLogo !== null ? formValue.devLogo : innitDevlogo
              }
              kecamatanValue={
                formValue.kecamatan !== null
                  ? titleCase(formValue.kecamatan.label)
                  : null
              }
              kabupatenValue={
                formValue.kabupaten !== null
                  ? titleCase(formValue.kabupaten.label)
                  : null
              }
              provinsiValue={titleCase(formValue.provinsi.label)}
              imagesLength={formValue.imagesURLs.length}
            />
            <button className="mx-2 bg-primary4 px-4 py-1">Submit</button>
          </div>
        </div>
        {/* let result = formValue.fasilitas.map((a) => a.value); */}
        {/* Buat  convert object array ke aray saja */}
      </form>
    </div>
  );
};

export default InputForm;
