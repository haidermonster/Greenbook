const express = require('express');
const {
    getOrders,
    getidOrders,
    createOrders,
    deleteOrders,
    updateOrders
}=require("../controllers/order")
const router =express.Router()



router.get("/orders", getOrders)

router.get("/orders/:id", getidOrders)



router.post("/orders", createOrders)

router.delete("/orders/:id", deleteOrders)


router.put('/orders/:id', updateOrders)
  
// router.delete("/orders/:id", async (req, res) => {
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


module.exports = router;