import { useEffect } from "react";

function ImagesUpload(props) {
  // const { images, setImages, setImageURLs } = props;
  // useEffect(() => {
  //   if (images.length < 1 || images.length > 8) return;
  //   const newImageUrls = [];
  //   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //   setImageURLs(newImageUrls);
  // }, [images, setImageURLs]);

  const { images, setImages, formValue, setFormValue } = props;

  useEffect(() => {
    if (images.length < 1 || images.length > 8) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    let updatedValue = {};
    updatedValue = { imagesURLs: newImageUrls };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  }, [images, setFormValue]);

  // const handleOnChange = (e) => {
  //   let updatedValue = {};
  //   updatedValue = { imagesURLs: [...e.target] };
  //   setFormValue((prev) => ({ ...prev, ...updatedValue }));
  // };
  console.log(formValue.imagesURLs);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
    console.log(e.target.files);
  };

  return (
    <div className="images-upload">
      <label>Upload Foto:</label>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
  );
}

export default ImagesUpload;
