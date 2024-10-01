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
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDr1nrXZlu5zHz_OJ8NtlTDWbwvNvx3vfY",
//   authDomain: "picguessr-74fb2.firebaseapp.com",
//   projectId: "picguessr-74fb2",
//   storageBucket: "picguessr-74fb2.appspot.com",
//   messagingSenderId: "1019944570937",
//   appId: "1:1019944570937:web:4b5d7463f7eedf0b6b3de8",
//   measurementId: "G-6V41DLDZ7Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);