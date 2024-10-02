import React from "react";
import styles from './styles.module.scss'
import Form from 'react-bootstrap/Form';

const Form = ({children, syle, onSubmit})=>{
    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit()
    }
    return (
        <Form style={style} onSubmit={handleSubmit}>
        {children}
        </Form>
    )
}

export default Form