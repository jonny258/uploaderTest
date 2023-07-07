import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "public_FW25bUsEgLaLmifCsyAEZMAxaX9j" }); // Your real API key.

const UploadButtonComp = ({ pictureState, setPictureState }) => (
  <UploadButton
    uploader={uploader}
    options={{ multi: true }}
    onComplete={(files) => setPictureState((prev) => [...prev, files])}
  >
    {({ onClick }) => (
      <>
        <button onClick={onClick}>Upload a file...</button>
        <button onClick={() => { console.log(pictureState) }}>Console.log the file array</button>
      </>
    )}
  </UploadButton>
);

export default UploadButtonComp;
