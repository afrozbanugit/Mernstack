let express = require("express");
let HobbyRoute = express.Router();
let HobbyDataModel = require("../DataModel/HobbyDataModel")

HobbyRoute.post("/api/save",async(req,res)=>{
 //   console.log("Request Body ", req.body);
 //   const hobbylist = await HobbyDataModel.findOne();
  //  console.log("Hobby list ",hobbylist);
    let newHobby = new HobbyDataModel({Hobby:req.body.hobby});
    newHobby.save()
        .then((saveddata)=>{
            console.log("saved data ",saveddata)
            res.send(saveddata)
        })
        .catch((error)=>console.error("error while saving ",error))
})

HobbyRoute.get("/api/getall",async (req,res)=>{
    console.log("Fetch hobbies from db ");
    const hobbies = await HobbyDataModel.find();
  //  console.log("All hobbies ", hobbies);
    res.send(hobbies);
})
module.exports=HobbyRoute;