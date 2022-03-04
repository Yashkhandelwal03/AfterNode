const express = require ('express');
const router = new express.Router();


const mansRanking = require('../models/mens');
//POST request
// router.post('/mens', async(req,res)=>{
//     try{
//         const addMensRecord = new mansRanking(req.body);
//         console.log(addMensRecord);
//         const resmens = await addMensRecord.save();
//         res.status(200).send(resmens);
//     }catch(e){
//         res.status(400).send(e);
//     } 
// })


//GET Request
// router.get('/mens', async(req,res)=>{
//     try{
//         const resmens = await mansRanking.find({name:"Gopal Khandelwal"});
//         res.status(200).send(resmens);
//     }catch(e){
//         res.status(400).send(e);
//     } 
// })

//Get using ID
// router.get('/mens/:id', async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const resmens = await mansRanking.findById({_id});
//         res.status(200).send(resmens);
//     }catch(e){
//         res.status(400).send(e);
//     } 
// })

// patch method

// router.patch('/mens/:id', async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const resmens = await mansRanking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//         res.status(200).send(resmens);
//     }catch(e){
//         res.status(400).send(e);
//     } 
// })

//put method

// router.put('/mens/:id', async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const resmens = await mansRanking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//         res.status(200).send(resmens);
//     }catch(e){
//         res.status(400).send(e);
//     } 
// })

// delete method
router.delete('/mens/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const ressems = await mansRanking.findByIdAndDelete(_id);
        res.status(200).send(ressems);
    }catch(err){
        res.send(err);
    }
})

module.exports = router;