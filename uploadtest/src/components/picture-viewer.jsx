import React from "react";

function PictureViewer({ pictureState }) {
  return (
    <>
      {pictureState.map((image, index) => {
        return (
          <>
            <img key={index} src={image[0].fileUrl} className="picture"/>
          </>
        );
      })}
    </>
  );
}

export default PictureViewer;
