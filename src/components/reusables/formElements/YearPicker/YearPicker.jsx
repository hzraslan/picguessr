import React from "react";
import styles from './styles.module.scss'
import Form from 'react-bootstrap/Form';

const Form = ({children, syle, label})=>{
    const handleChange = (e)=>{
        console.log(e)
    }
    return (
        <>
        <Form.Label className={styles.label} style={syle?.label}>{label}</Form.Label>
        <Form.Range className={styles.range} style={syle?.range} onChange={handleChange} />
      </>
    )
}

export default Form