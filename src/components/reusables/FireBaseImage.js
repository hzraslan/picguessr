import React, { useEffect, useState, useContext } from "react";
import {useAppContext} from "../../App"

const FBaseImage = ({style, src})=>{
    const { state } = useAppContext()
    const {firebase} = state
    const [finalSrc, setFinalSrc] = useState(null)

    useEffect(()=>{
        firebase.createGsReference(src).then(res=> setFinalSrc(res))
    }, [src])
    return <img style={style} src={finalSrc} alt={src} />
}
export default FBaseImage;