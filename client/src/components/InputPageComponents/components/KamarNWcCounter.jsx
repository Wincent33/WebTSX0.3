import { BiBed, BiBath } from "react-icons/bi";
const KamarNWcCounter = (props) => {
  const { formValue, setFormValue } = props;

  const handleKamarMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur > 0) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleKamarPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur < 10) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi > 0) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi < 10) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  return (
    <div className="flex flex-row justify-start m-1 h-24">
      <div className="">
        {/* <div className="kamar-text">Jumlah Kamar Tidur:</div> */}
        <div className="flex flex-row items-center h-12">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleKamarMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center font-[600]">
            <BiBed size={"40px"} color={"black"} />
            <h2>x {formValue.kamarTidur}</h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleKamarPlus}
          >
            +
          </button>
        </div>
      </div>

      <div>
        {/* <div className="wc-text">Jumlah Kamar Mandi:</div> */}
        <div className="flex flex-row items-center h-12">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleWCMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center font-[600]">
            <BiBath size={"40px"} color={"black"} />
            <h2>x {formValue.kamarMandi}</h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleWCPlus}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default KamarNWcCounter;
