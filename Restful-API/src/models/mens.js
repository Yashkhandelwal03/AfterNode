const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        require:true
    },
    ranking:{
        type: Number,
        require:true
    },
    events:{
        type:Number,
        default:100,
        require:true
    },
    score:{
        type: Number,
        require: true
    }
})

const SportsMenList = new mongoose.model("SportsMenList",menSchema)

const result = async ()=>{
    try{
        const usainBolt = new SportsMenList({
            name:"UsainBolt",
            country:"Jamica",
            ranking:1,
            score:100
        });

        const tysonGay = new SportsMenList({
            name:"TysonGay",
            country:"USA",
            ranking:2,
            score:95
        });

        const yohanBlake = new SportsMenList({
            name:"YohanBlake",
            country:"Jamica",
            ranking:3,
            score:93
        })
    
        // const res = await SportsMenList.insertMany([usainBolt,tysonGay,yohanBlake])
        // const res = await usainBolt.save();
        // console.log(res);
    }catch(err){
        console.log(err);
    }
}

result();

module.exports = SportsMenList;