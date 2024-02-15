import * as Yup from "yup";

export const signUpSchema =Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null, "password must match"]),
})
export const orderSchema =Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    contact: Yup.number().required("Please enter the number of copies").positive("Number of copies must be positive"),
    email: Yup.string().email().required("Please enter a valid email"),
    noCopies: Yup.number().required("Please enter the number of copies").positive("Number of copies must be positive"),
    postalAddress: Yup.string().required("Please enter your postal address"),
    message: Yup.string().required("Please enter a message"),
})

export const loginSchema =Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    password:Yup.string().min(6).required("Please enter your password"),
})