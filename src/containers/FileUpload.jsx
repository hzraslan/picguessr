import { useState, useEffect, useContext } from "react";
import exifr from "exifr";
import { FirebaseContext } from "../firebase/firebase-init";
import {FBaseImage, Map} from "../components/reusables";
import {useAppContext} from "../App"

const FileUpload = () => {
  const { state } = useAppContext()
  const {firebase} = state
  console.log(firebase)
    const [file, setFile] = useState("");
    const [imgSrc, setImgSrc] = useState();
    const [loading, setLoading] = useState(true);
    // const [gps, setGps] = useState({ latitude: 0, longitude: 0 });
    // const currentRef = useRef();
  
    const handleChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const getLocationAndDateFromImage = async(file)=>{
      const result ={
        year: new Date(file.lastModifiedDate).getFullYear()
      }
      let res = await exifr.gps(file);
      if(res){
        const { latitude, longitude }  = res
        result.latitude = latitude
        result.longitude = longitude
        return result 
      }
      return null
    }
  
    const readFile = async () => {
      const reader = new FileReader();
  
      await reader.addEventListener(
        "load",
        () => {
          setImgSrc(reader.result);
          setLoading(false);
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
        try {
          getLocationAndDateFromImage(file)
          // firebase.addData("images", { latitude, longitude});
          // firebase.uploadFile(imgSrc, `images/${file.name}`)
        } catch (e) {
          console.error('"No gps Meta Data :) Try another pix"', e);
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
  
        <div>{!loading && <img id="output" src={imgSrc} alt={file.name} />}</div>
        <FBaseImage src="images/beachy_costal-2.jpeg" style={{width: "200px"}} />
        {/* <Map /> */}
      </div>
    );
}

export default FileUpload;