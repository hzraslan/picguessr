import { useState, useEffect, useRef } from "react";
import exifr from "exifr";

// const localS = (file) => window.localStorage.setItem("img", file.name);
export default function App() {
  const [file, setFile] = useState("");
  const [imgSrc, setImgSrc] = useState();
  const [loading, setLoading] = useState(true);
  // const [gps, setGps] = useState({ latitude: 0, longitude: 0 });
  // const currentRef = useRef();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const readFile = async () => {
    const reader = new FileReader();

    await reader.addEventListener(
      "load",
      () => {
        // console.log(reader.result);
        setImgSrc(reader.result);
        setLoading(false);
      },
      false
    );
    if (file) {
      await reader.readAsDataURL(file);

      try {
        let { latitude, longitude } = await exifr.gps(file);
        console.log(latitude, longitude);
      } catch (e) {
        console.error('"No gps Meta Data :) Try another pix"');
        throw new Error("No gps Meta Data :) Try another pix");
      }
    }
  };
  useEffect(() => {
    readFile();
  });
  return (
    <div className="App">
      <h1>Load an Image</h1>
      <h2>only React</h2>
      <input type="file" onChange={handleChange} />

      <div>{!loading && <img id="output" src={imgSrc} />}</div>
    </div>
  );
}
