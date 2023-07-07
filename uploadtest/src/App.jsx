import React, { useState } from "react";
import UploadButtonComp from "./components/upload-button";
import PictureViewer from "./components/picture-viewer";
import "./App.css";

function App() {
  const [pictureState, setPictureState] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 border">
          <UploadButtonComp
            pictureState={pictureState}
            setPictureState={setPictureState}
          />
        </div>
        <div className="col-6 border">
          <PictureViewer pictureState={pictureState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
