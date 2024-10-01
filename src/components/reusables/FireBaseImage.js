import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../firebase/firebase-init";
const FBaseImage = ({style, src})=>{
    const { firebase } = useContext(FirebaseContext);
    const [finalSrc, setFinalSrc] = useState(null)

    useEffect(()=>{
        firebase.createGsReference(src).then(res=> setFinalSrc(res))
    }, [src])
    return <img style={style} src={finalSrc} alt={src} />
}
export default FBaseImage;