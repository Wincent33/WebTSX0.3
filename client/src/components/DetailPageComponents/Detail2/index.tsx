import React from "react";
import ReadMore from "../ReadMore";
import FasilitasDetail from "./FasilitasDetail";
const Detail2 = () => {
  return (
    <div className="w-full h-fit bg-white py-5">
      <div className="mx-auto flex flex-row w-[90vw] max-w-[1200px] gap-8">
        <div className="flex flex-col w-full relative">
          <h1 className="text-2xl font-bold">Deskripsi Properti</h1>
          <div className="m-0 w-[500px] border-b-[5px] border-b-primary4 border-solid" />
          <div className="mx-auto pl-[10px] my-[10px] h-full w-full max-w-[1200px]">
            <ReadMore>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros
              magna, sagittis id justo sed, tristique dignissim eros. Sed non
              metus molestie, ultrices quam vitae, ornare ipsum. Vestibulum
              dignissim viverra orci bibendum vehicula. Praesent varius velit
              orci, non hendrerit sem eleifend in. Duis at porta dolor, et
              finibus tortor. Cras vel dignissim arcu, quis maximus sem.
              Maecenas nec tortor commodo, volutpat justo id, suscipit augue.
              Donec mollis in urna eget vehicula. Suspendisse mauris massa,
              iaculis ut tempor iaculis, blandit at orci. Fusce sagittis, justo
              nec hendrerit condimentum, mauris quam lobortis odio, ac porta ex
              eros a nisi. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Quisque pulvinar nunc
              vitae ultrices pulvinar. Nulla facilisi. Donec sed aliquam ipsum.
              Pellentesque eu condimentum erat. Mauris euismod diam quis
              efficitur mattis. Sed quis cursus ante. Vivamus ac dapibus eros,
              id sagittis neque. Donec dui velit, pharetra quis vestibulum
              ultrices, mollis aliquet nisl. Sed pulvinar eros magna, et
              sagittis diam gravida in. Suspendisse suscipit finibus egestas.
              Cras mattis augue tempus arcu placerat, dictum tempor velit
              aliquet. Nullam quis arcu turpis. Vestibulum sollicitudin sodales
              metus vel efficitur. Integer condimentum ultricies mollis. Fusce
              eu ultricies nibh.
            </ReadMore>
          </div>
        </div>
        <div className="w-[45%]">
          <FasilitasDetail />
        </div>
      </div>
    </div>
  );
};

export default Detail2;
