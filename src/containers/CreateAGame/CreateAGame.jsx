import React, { useEffect } from "react";
import styles from './styles.module.scss'
import {useAppContext} from "../../App"
const CreateAGame = ()=>{
    const { state, dispatch } = useAppContext()

    useEffect(()=>{
        console.log(state)
    }, [state])

    return (
        <>

        </>
    )
}
export default CreateAGame