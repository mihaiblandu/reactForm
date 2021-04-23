import React from 'react'
import "./Form.css"
import {useFormik} from 'formik'

export default function YouTubeForm() {

     const formik = useFormik({
         
     })
    return (
        <div align="center">
            <form >
            <label htmlFor='name'>Name</label>
            <input name='name' id='name' placeholder="the name of the video" type='text'></input>  
            <label htmlFor='email'>email</label>
            <input name='email' id='email' placeholder="the email of the video" type='text'></input>
            <label htmlFor='Channel'>Channel</label>
            <input name='channel' id='channel' placeholder="the channel of the video" type='text'></input>
            {/*<input type="submit" value="Submit"/>*/}
            <button onClick={() =>alert("hello")} type="button">Submit Ok</button>
            </form>
        </div>
    )
}
