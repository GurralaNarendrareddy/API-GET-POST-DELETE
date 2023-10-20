let mongoose=require("mongoose");


let prodSchema=mongoose.Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})

let Products=mongoose.model("Products",prodSchema);

module.exports=Products;