import React from 'react'
import './Form.css'
import { useFormik } from 'formik'
import { orderSchema } from '../schemas'
import postData from '../api/api'
function Form() {


    const initialValues ={
        name: "",
        contact: "",
        email: "",
        noCopies: "",
        postalAddress: "",
        message: "",

    }
    
       const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
            initialValues: initialValues,
            validationSchema: orderSchema,
            onSubmit : (values)=> {
            console.log(
    " file: registration.jsx line 25 registration values",
                values
            );
    
            postData("http://localhost:8000/orders/", values).then((data) => {
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

                    <div className="col-md-6">

                        <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />


                        {errors.name && touched.name ?(
    <p className='form-error'>{errors.name}</p>
    ):null}
                    </div>

                    <div className="col-md-6">

                        <label htmlFor="exampleInputEmail1" class="form-label">Contact</label>
                        <input type="text" class="form-control" name='contact' value={values.contact} onChange={handleChange} onBlur={handleBlur}  id="exampleInputEmail1" aria-describedby="emailHelp" />
                      
                        {errors.contact && touched.contact ?(
    <p className='form-error'>{errors.contact}</p>
    ):null}
       
                    </div>

                </div>

                <div class="row">

                    <div className="col-md-6">

                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        {errors.email && touched.email ?(
    <p className='form-error'>{errors.email}</p>
    ):null}
                    </div>

                    <div className="col-md-6">

                        <label htmlFor="exampleInputEmail1" class="form-label">No of Copies</label>
                        <input type="text" class="form-control" name='noCopies' value={values.noCopies} onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />


                        {errors.noCopies && touched.noCopies ?(
    <p className='form-error'>{errors.noCopies}</p>
    ):null}
                    </div>

                </div>

                <div class="row">

                    <div className="col-md-6">

                        <label htmlFor="exampleInputEmail1" class="form-label">Postal Address</label>
                        <textarea class="form-control tex" placeholder="Leave a comment here" name='postalAddress' value={values.postalAddress} onChange={handleChange} onBlur={handleBlur} id="floatingTextarea"></textarea>

                        {errors.postalAddress && touched.postalAddress ?(
    <p className='form-error'>{errors.postalAddress}</p>
    ):null}
                    </div>

                </div>

                <div class="row pb-3">

<div className="col-md-6">

    <label htmlFor="exampleInputEmail1" class="form-label">Message</label>
    <textarea class="form-control tex" placeholder="Leave a comment here" name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} id="floatingTextarea"></textarea>

    {errors.message && touched.message ?(
    <p className='form-error'>{errors.message}</p>
    ):null}
</div>

</div>


                <button type="submit" class="btn sub">Submit</button>
            </form>



        </>
    )
}

export default Form