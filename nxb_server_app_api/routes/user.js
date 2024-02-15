const express = require('express');
const {
    getUsers,
    getidUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    userSignin
}=require("../controllers/user")
const router =express.Router()
const {checkAuth} = require('../middleware/auth')

router.get("/",checkAuth ,getUsers)

router.get("/:id", getidUsers)

router.post("/", createUsers)

router.post("/signin", userSignin)

router.delete("/:id", deleteUsers)
router.put('/profile',checkAuth ,updateUsers)


module.exports = router;