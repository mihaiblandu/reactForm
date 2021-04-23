import React from 'react'
import "./Form.css"
import { Formik, FormikContext, useFormik } from 'formik'
import * as Yup from 'yup';

export default function YupYouTubeForm() {


    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        email:  Yup.string().email("Invalide Email format").required("Required"),
        channel: Yup.string().required("Required")

    })

    const formik = useFormik({
        initialValues: {
            name: "Michael",
            email: "",
            channel: ""
        },validationSchema
        ,
        onSubmit: values => {
            console.log("Form data ", values);

        }
    })



    return (
        <div align="center">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : <div></div>}
                <input 
                    name='name' 
                    id='name' 
                    placeholder="the name of the video" 
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}></input>
                <label htmlFor='email'>email</label>
                {formik.errors.email && formik.touched.email? 
                <div className="error">{formik.errors.email}</div> 
                :
                <div></div>}
                <input 
                    name='email' 
                    id='email' 
                    placeholder="the email of the video"
                    type='text' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.email}></input>
                <label htmlFor='Channel'>Channel</label>
                {formik.errors.channel && formik.touched.channel ? <div className="error">{formik.errors.channel}</div> : <div></div>}
                <input 
                    name='channel' 
                    id='channel' 
                    placeholder="the channel of the video"
                    type='text' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}></input>
                <input type="submit" value="Submit =>" />
                <button onClick={() => alert("hello")} type="button">Submit Ok</button>
            </form>
        </div>
    )
}
