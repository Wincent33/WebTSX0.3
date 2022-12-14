import React from "react";
// import PropertyCards from "../../../PropertyCards";
import PropertyCards from "../../Common/PropertyCards";
// import toRupiah from "@develoka/angka-rupiah-js";
import { WordifyRupiah } from "../../../assets/utils/WordifyRupiah";

const ReviewPopUP = (props: any) => {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-primary5 bg-opacity-20 flex justify-center items-center z-[999]">
      <div className="relative p-8 w-full max-w-2xl bg-white max-h-[800px] overflow-x-hidden overflow-y-auto rounded-[50px] scrollbar-hide">
        <button
          className="absolute top-5 right-5"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          Close
        </button>
        <div className="flex justify-center">
          <PropertyCards
          className="z-[1000]"
            devLogo={props.devLogo}
            harga={"Rp "+WordifyRupiah(props.harga)}
            images={props.images}
            cicilan={props.cicilan}
            imageTotal={props.imagesLength}
            judul={props.judul}
            lokasi={props.lokasi}
            jumlahKamar={props.jumlahKamar}
            jumlahLantai={props.lantai}
            jumlahWC={props.jumlahWC}
            jumlahParkir={props.jumlahParkir}
            luasTanah={props.luasTanah}
            luasBangunan={props.luasBangunan}
            sellerPhoto={props.sellerPhoto}
            sellerName={props.sellerName}
            kecamatanValue={props.kecamatanValue}
            kabupatenValue={props.kabupatenValue}
            provinsiValue={props.provinsiValue}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ReviewPopUP;
