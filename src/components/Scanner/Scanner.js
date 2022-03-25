import React from "react";
import Webcam from "react-webcam";
import LabelInfo from "../LabelInfo/LabelInfo";

const Scanner = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      {!imgSrc ? (
        <>
          <h1>Please Scan Your Label</h1>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <LabelInfo scan={imgSrc} />
      )}
    </>
  );
};

export default Scanner;
