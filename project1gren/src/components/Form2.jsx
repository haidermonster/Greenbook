import React from 'react'
import './Form2.css'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas'
import postData from '../api/api'
function Form2() {


const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:"",    
}

   const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit : (values)=> {
        console.log(
" file: registration.jsx line 25 registration values",
            values
        );

        postData("http://localhost:8000/users/", values).then((data) => {
            alert("Success")
            console.log(data); // JSON data parsed by `data.json()` call
          }).catch((error) => {
            alert("Exception raised during signup process")
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
                <div class="row">

                    <div className="col-md-12">

                        <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

{errors.name && touched.name ?(
    <p className='form-error'>{errors.name}</p>
    ):null}
                    </div>


                </div>

                <div class="row">

                    <div className="col-md-12">

                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.email && touched.email ?(
    <p className='form-error'>{errors.email}</p>
    ):null}
                    </div>

                </div>


                <div class="row">

                    <div className="col-md-12">

                        <label htmlFor="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.password && touched.password ?(
    <p className='form-error'>{errors.password}</p>
    ):null}
                    </div> 

                </div>

                <div class="row">

                    <div className="col-md-12">

                        <label htmlFor="exampleInputEmail1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" name='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.confirm_password && touched.confirm_password ?(
    <p className='form-error'>{errors.confirm_password}</p>
    ):null}
                    </div> 

                </div>

                <button type="submit" class="btn sub">Submit</button>
            </form>
            </>
  )
}

export default Form2