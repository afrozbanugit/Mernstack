//We define all the routes regarding user here. 
let express = require('express');
let userRouter = express.Router({strict:true, caseSensitive: true}); //This returns a Router object which is like a mini express app that can 
//access all http methods and can be used as a middleware function and be mounted on our application too.
let userDataModel = require("../DataModel/UserDataModel");

//All router methods get access to request and response objects
userRouter.get("/api/users",async(request,response,next)=>{
   let users =await userDataModel.find()
   response.send(users);
});

//post request for new user
userRouter.post("/api/signinup",(req, res)=>{

    let userObj = req.body; //user object passed in the body of sigininup api
    console.log("userobj", userObj)

    userDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        
        if(existingUser){//user exists so send the user details - sign in
            
            res.send(existingUser)            
        }
        else//user doesn't exists so create one and create one - sign up
        {
            let userSchemaObj = new userDataModel(req.body);//for new user
            console.log("Request body ",req.body);
            userSchemaObj.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser) //{userName : "value"....}
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }        

    }).catch((error)=>{
        console.log("Error while fetching existing user", error)
        res.send("Error while fetching existing user")
    })   
})
    
   
           
userRouter.get("/",async (request,response,next)=>{
   let users= await userDataModel.find();
    response.send(users);
 });

 userRouter.post("/api/update",async (req,res)=>{
   // console.log("Request body ", req.body);
    try{
    let userObj =await userDataModel.findById(req.body._id)
    if(userObj){
      //  console.log("User with id ", userObj);
        userObj.hobby=req.body.hobby;
        const savedUser = await userObj.save();
        console.log(savedUser);
        res.send(savedUser);
    }else{
        res.sendStatus(404).send("User with id not found in DB");
    }
    }catch(Error){
        console.error("Error while updating user details in db");
    }
 })

module.exports=userRouter;