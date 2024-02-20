const express = require('express');
const mongoose = require('mongoose');
const Users = require('../models/user.');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

let getUsers = async (req, res) => {
    try {


        let id = req.body.id;
        const user = await Users.findOne({ _id: id });
        if (user) {
            if (user.userType === "admin") {

                const users = await Users.find({})
                res.status(200).json({ data: users });
            } else {
                console.log(user);

                return res.status(403).json({ message: "u hae not access to this resource" });
            }
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


let getidUsers = async (req, res) => {
    try {
        const id = req.params.id

        if (!mongoose.isValidObjectId(id)) {
            return res.status(500).json({ message: "Invalid Id" });

        }

        const users = await Users.findOne({ _id: id })
        if (!users) {

            return res.status(404).json({ message: "Orders not found" });

        }
        res.status(200).json({ data: users });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


let userSignin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await Users.findOne({ email })
        if (!users) {

            return res.status(404).json({ message: "user doesnot exist against this email" });

        }
        const isMatch = await bcrypt.compare(password, users.password)
        if (isMatch) {
            jwt.sign({ id: users._id }, process.env.JWT_SECRET, { expiresIn: '1day', audience: "web_app" }, (err, token) => {
                if (err) {
                    return res.status(500).json({ message: err.message });
                }

                return res.status(200).json({ message: "signin success", user: { name: users.name, email: users.email, token: token } });

            })

        } else {
            return res.status(200).json({ message: "Invalid password" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// let userSignin = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await Users.findOne({ email });

//       if (!user) {
//         return res
//           .status(404)
//           .json({ message: "user does not exist against this email" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (isMatch) {
//         return res.status(200).json({ message: "signin success", user:{_id:user._id, name:user.name, email:user.email} });

//       } else {
//         return res.status(200).json({ message: "Invalid password" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

let createUsers = async (req, res) => {
    try {
        let error = []
        const { email, name, password } = req.body;
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }


            if (!email) {
                error.push("email feild is required")
            }
            if (!name) {
                error.push("name feild is required")
            }
            if (!password) {
                error.push("password feild is required")
            }


            if (error.length > 0) {

                return res.status(400).json({ status: "validation error", message: error.message })
            }
            // console.log(user);
            const newuser = new Users({ email, name, password: hash })
            await newuser.save()
            if (newuser) {

                return res.status(201).json({ message: "user created", user: { _id: newuser._id, name: newuser.name, email: newuser.email } });

            } else {

                return res.status(500).json({ message: "user not created" })
            }
        })


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

let deleteUsers = async (req, res) => {
    try {

        const id = req.params.id
        if (!mongoose.isValidObjectId(id)) {
            return res.status(500).json({ message: "Invalid Id" });

        }
        const user = await Users.findByIdAndDelete({ _id: id })
        if (user && user.deletedCount > 0) {
            res.status(200).json({ users: "users" })
        } else {

            res.status(404).json({ users: "users not found" })
        }
        res.status(200).json({ users: user })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

let updateUsers = async (req, res) => {
    try {


        const userUpdate = req.body
        const id = req.body.id

        const user = await Users.findByIdAndUpdate({ _id: id }, userUpdate)


        res.status(200).json({ message: "user updated", data: user })


    } catch (error) {
        res.status(500).json({ message: error })
    }
}

let changePassword = async (req, res) => {
    try {
let id = req.body.id;
        const { password, newPassword } = req.body.id

let errors=[]
        if (!password) {
            errors.push("password feild is required")
        }
        if (!newPassword) {
            errors.push("newPassword feild is required")
        }


        if (errors.length > 0) {

            return res.status(400).json({ status: "bad request", errors: errors })
        }

        const users = await Users.findOne({ _id: id })
        if (!users) {

            return res.status(404).json({ message: "user doesnot exist against this email" });

        }
        const isMatch = await bcrypt.compare(password, users.password)

        if (isMatch) {

            bcrypt.hash(newPassword, 10, async (err, hash) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                }

                users.password = hash;
                const response = await new users.save();
                if (response) {

                    return res.status(201).json({ message: "password is changed", user: { _id: newuser._id, name: newuser.name, email: newuser.email } });

                } else {

                    return res.status(500).json({ message: "user not created" })
                }
            })


        } else {
            return res.status(200).json({ message: "current password is invalid" });
        }


        res.status(200).json({ message: "user updated", data: users })


    } catch (error) {
        res.status(500).json({ message: error })
    }
}









// app.delete("/orders/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       if (!mongoose.isValidObjectId(id)) {
//         return res.status(500).json({ message: "Invalid id" });
//       }

//       const order = await Orders.findByIdAndDelete({ _id: id });
//       if (!order) {
//         return  res.status(404).json({ message: "Category not found" });
//       }
//       res.status(200).json({ message:"Category deleted",data:order}) 
//     } catch (error) {
//       res.status(500).json({ message: error });
//     }
//   });



module.exports = {
    getUsers,
    getidUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    userSignin,
    changePassword
};