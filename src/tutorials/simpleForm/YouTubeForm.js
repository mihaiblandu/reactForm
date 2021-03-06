import React from 'react'
import "./Form.css"
import { Formik, FormikContext, useFormik } from 'formik'

export default function YouTubeForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        },
        validate: values => {
            //values.name, ...
            // errors.email errors.name errors.channel
            let errors = {}

            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.email) {

                errors.email = 'Required';

            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

                errors.email = 'Invalid email address';
                console.log(errors);
            }


            if (!values.channel) {
                errors.channel = "Required"
            }
            return errors
        }
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
