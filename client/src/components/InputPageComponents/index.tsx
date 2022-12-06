import React, { useState } from "react";
import "./style.scss";
import ReviewPopUP from "./ReviewPopUpContent";
import Judul from "./components/Judul";
import NamaProperti from "./components/NamaProperti";
import Deskripsi from "./components/Deskripsi";
import Developer from "./components/Developer.jsx";
import JenisProperti from "./components/JenisProperti";
import Harga from "./components/Harga";
import JenisSertifikat from "./components/JenisSertifikat";
import Furnished from "./components/Furnished";
import ProvinsiSelect from "./components/ProvinsiSelect.jsx";
import KabupatenSelect from "./components/KabupatenSelect";
import KecamatanSelect from "./components/KecamatanSelect";
import LTLB from "./components/LTLB";
import KamarNWcCounter from "./components/KamarNWcCounter";
import Fasilitas from "./components/Fasilitas";
import Lokasi from "./components/Lokasi";
import Zona from "./components/Zona";
import Yard from "./components/Yard";
import ImagesUpload from "./components/ImagesUpload";
import Lantai from "./components/Lantai";
import ParkirMobil from "./components/ParkirMobil";
import Listrik from "./components/Listrik";
import BeliSewa from "./components/BeliSewa";
const InputForm = () => {
  const formInnit = {
    status: "dijual",
    judul: "",
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
      "https://images.unsplash.com/photo-1665777916560-60bbcb0ce05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    isFurnished: false,
    luasTanah: null,
    luasBangunan: null,
    lantai: 0,
    parkir: 0,
    kamarTidur: 0,
    kamarMandi: 0,
    fasilitas: [],
    zona: [],
    isYard: false,
    listrik: null,
  };
  const [formValue, setFormValue] = useState(formInnit);
  const [reviewPopUp, setReviewPopUp] = useState(false);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([
    "https://images.unsplash.com/photo-1665777916560-60bbcb0ce05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  ]);
  function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  }

  return (
    <div className="w-full">
      <form className="flex flex-row justify-between">
        {/* Form Left */}
        <div className="ml-5 mt-5 flex flex-col gap-2 w-[50%]">
          <BeliSewa formValue={formValue} setFormValue={setFormValue} />
          <Judul formValue={formValue} setFormValue={setFormValue} />
          <NamaProperti formValue={formValue} setFormValue={setFormValue} />
          <Deskripsi formValue={formValue} setFormValue={setFormValue} />
          <Developer formValue={formValue} setFormValue={setFormValue} />
          <div className="alamat">
            <Lokasi formValue={formValue} setFormValue={setFormValue} />
            <ProvinsiSelect formValue={formValue} setFormValue={setFormValue} />
            <KabupatenSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
            <KecamatanSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
          </div>
          <JenisProperti formValue={formValue} setFormValue={setFormValue} />
          <Harga formValue={formValue} setFormValue={setFormValue} />
          <JenisSertifikat formValue={formValue} setFormValue={setFormValue} />
          <ImagesUpload
            images={images}
            setImages={setImages}
            setImageURLs={setImageURLs}
          />
        </div>
        <div className="form-right">
          <Furnished formValue={formValue} setFormValue={setFormValue} />
          <ParkirMobil formValue={formValue} setFormValue={setFormValue} />
          <Lantai formValue={formValue} setFormValue={setFormValue} />
          <LTLB formValue={formValue} setFormValue={setFormValue} />
          <KamarNWcCounter formValue={formValue} setFormValue={setFormValue} />
          <Fasilitas formValue={formValue} setFormValue={setFormValue} />
          <Zona formValue={formValue} setFormValue={setFormValue} />
          <Yard formValue={formValue} setFormValue={setFormValue} />
          <Listrik formValue={formValue} setFormValue={setFormValue} />
          <div className="review-submit">
            <button
              className="review"
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
              images={imageURLs}
              cicilan={21}
              jumlahKamar={formValue.kamarTidur}
              jumlahParkir={formValue.parkir}
              jumlahWC={formValue.kamarMandi}
              devLogo={formValue.devLogo !== null ? formValue.devLogo : ""}
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
              imagesLength={imageURLs.length}
            />
            <button className="submit">Submit</button>
          </div>
        </div>
        {/* let result = formValue.fasilitas.map((a) => a.value); */}
        {/* Buat  convert object array ke aray saja */}
      </form>
    </div>
  );
};

export default InputForm;
