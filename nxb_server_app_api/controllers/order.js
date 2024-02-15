
const mongoose = require('mongoose');
const Orders = require('../models/order');


let getOrders = async (req, res) => {
    try {
        const orders = await Orders.find({})
        res.status(200).json({ data: orders });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

let getidOrders =async (req, res) =>{
    try {
        const id=req.params.id
    
    if(!mongoose.isValidObjectId(id)){
        return res.status(500).json({ message: "Invalid Id" });
    
    }
    
        const orders=await Orders.findOne({_id:id})
        if (!orders) {
            
          return res.status(404).json({ message: "Orders not found" });
    
        }
        res.status(200).json({ data: orders });
    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

    
let createOrders = async(req, res) => {
    try {
        const order = req.body
        console.log(order);
        const neworder = new Orders(order)
        await neworder.save()
        res.status(201).json({ data: neworder });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

let deleteOrders = async (req, res) => {
    try {

        const id=req.params.id
        if(!mongoose.isValidObjectId(id)){
            return res.status(500).json({ message: "Invalid Id" });
            
        }
        const order=await Orders.findByIdAndDelete({_id:id})
if (order && order.deletedCount > 0) {
    res.status(200).json({ orders: "orders" })
} else {
    
    res.status(404).json({ orders: "orders not found" })
}
        res.status(200).json({orders: order})

    } catch (error) { 
        res.status(500).json({ message: error.message })
    }
}


let updateOrders =async (req, res) => {
    try {
        const id=req.params.id
        if(!mongoose.isValidObjectId(id)){
            return res.status(500).json({ message: "Invalid Id" });
        
        }
    const orderUpdate = req.body
    const order = await Orders.findByIdAndUpdate({_id: id}, orderUpdate)
        

    res.status(200).json({message:"order updated" ,data:order })
    } catch (error) {
        res.status(500).json({message:error})
    }
}
// router.get("/orders", )
// router.get("/orders/:id", )
// router.post("/orders", )
// router.delete("/orders/:id", )

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

// router.put('/orders/:id', )

module.exports = {
    getOrders,
    getidOrders,
    createOrders,
    deleteOrders,
    updateOrders
};