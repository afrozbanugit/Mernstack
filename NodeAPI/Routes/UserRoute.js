//We define all the routes regarding user here. 
let express = require('express');
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let userRouter = express.Router({strict:true, caseSensitive: true}); //This returns a Router object which is like a mini express app that can 
//access all http methods and can be used as a middleware function and be mounted on our application too.
let userDataModel = require("../DataModel/UserDataModel");
const SECRET_KEY ="MY_JWT_SECRET_KEY";

//All router methods get access to request and response objects
userRouter.get("/api/users",async(request,response,next)=>{
   let users =await userDataModel.find()
   response.send(users);
});

//post request for new user
userRouter.post("/api/signinup",async (req, res)=>{

    let userObj = req.body; //user object passed in the body of sigininup api
    console.log("userobj from request body ", userObj)

    let user = await userDataModel.findOne({userName:req.body.userName});
    try{
        if(!user){
            //No user with this username exists, so we create one
            console.log("password ",req.body.password);
        // Rounds equal 10 below means that 2^10 iterations that algorithm hashing takes to hash the password 
            let bcryptPwd = await bcrypt.hash(req.body.password,10);

            let newUser = new userDataModel(
                {
                userName:req.body.userName,
                password:bcryptPwd,
                street:req.body.street,
                mobile:req.body.mobile,
                email:req.body.email,            
            })
            newUser.save().then((savedUser)=>{
                console.log("New saved user ", savedUser);
                const token = generateToken(savedUser);
                res.status(201).send({token,user:savedUser});
            })
    }else{
        //User with this username exists, verify password and generate token
        console.log("password sent ",req.body.password);
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword) {
            res.status(401).send("Invalid Credentials");
        }else{
        const token = generateToken(user);
        res.status(200).send({token,user});
        }
    }
    }catch(error){
        console.error("Error ",error);
    }
     
})
    
let generateToken =(user)=>{
    let token = jwt.sign({username:user.userName},SECRET_KEY, { expiresIn: "12h" });
    return token;
} 
           
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