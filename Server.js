const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Products=require("./ProductModel");
app.use(express.json());

mongoose.connect("mongodb+srv://narendrareddy6730:Narendra63@cluster0.uzclflo.mongodb.net/Data?retryWrites=true&w=majority")
.then(
    console.log("db connected")
)
.catch((error)=>{
    console.log(error.message)
})


app.get("/getData",async (req,res)=>{
    try{
        let products=await Products.find();
        console.log(products);
        res.send(products);
    }
    catch(error){
        res.status(500).send({message:message.error})
    }
})


app.post('/addProduct',async (req,res)=>{
    let data=await Products.create(req.body);
    console.log(data);
    res.send(data);
})

app.delete('/geleteProduct/:id',async (req,res)=>{
    let {id}=req.params;
    let product=await Products.findByIdAndDelete(id);
    if(!product){
        res.status(400).send("unable to delete");
    }
    else{
        res.status(200).send("deleted successfully")
    }
})


app.listen(3021,()=>{
    console.log("Server running on port 3021")
})