import React from "react";
import Webcam from "react-webcam";
import LabelInfo from "../LabelInfo/LabelInfo";
import "./Scanner.scss";
import cameraButton from "../../assets/images/camerascanphoto.svg";

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
          <h1 className="scan-title">Please Scan Your Label</h1>
          <Webcam
            className="scan-camera"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <div className="scan-button-container">
            <img src={cameraButton} className="scan-button" onClick={capture} />
          </div>
        </>
      ) : (
        <LabelInfo scan={imgSrc} />
      )}
    </>
  );
};

export default Scanner;
