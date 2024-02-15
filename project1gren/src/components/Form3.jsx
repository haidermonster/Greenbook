import React from 'react'
import './Form3.css'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas'
import postData from '../api/api'
function Form3() {


    const initialValues = {
        name: "",
        password: "",
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(
                " file: registration.jsx line 25 registration values",
                values
            );

            postData("http://localhost:8000/logins/", values).then((data) => {
                alert("Success")
                console.log(data); // JSON data parsed by `data.json()` call
            }).catch((error) => {
                alert("Exception raised during login process")
                console.log(error);
            });

            console.log(

                " file: registration.jsx line 25 registration errors",
                errors
            );
        }
    })


    return (
        <>
            <form className=' global' onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-md-12">

                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.name && touched.name ? (
                            <p className='form-error'>{errors.name}</p>
                        ) : null}
                    </div>


                </div>

                <div class="row">

                    <div className="col-md-12">

                        <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.password && touched.password ? (
                            <p className='form-error'>{errors.password}</p>
                        ) : null}
                    </div>

                </div>


                <button type="submit" class="btn sub">Submit</button>
            </form>
        </>
    )
}

export default Form3