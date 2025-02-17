let expressInstance = require("express");
let userModel = require('./DataModel/UserDataModel');
let userRoute = require('./Routes/UserRoute')
let studentRoute = require("./Routes/StudentRoute")
let productRoute = require("./Routes/ProductRoute");
let cartRoute = require("./Routes/CartRoute");
let orderRoute = require("./Routes/OrderRoute")
let reviewRoute = require("./Routes/ReviewRoute")
let hobbyRoute =require("./Routes/HobbyRoute")
let cors = require("cors");
let authenticateToken = require("./Routes/AuthenticateToken");
let myApp = expressInstance();
const PORT = 9000;
let userApp = expressInstance(); //There can be multiple apps inside same project
let studentApp = expressInstance();
let productApp = expressInstance();
let cartApp = expressInstance();
let orderApp = expressInstance();
let reviewApp = expressInstance();
let hobbyApp = expressInstance();
//calling a middleware that will be executed always irrespective of any routes since we did not mention 
//any routes here
myApp.use(cors());
//json middle-ware for setting request content type to json in body
myApp.use(expressInstance.json({limit:'2mb', extended:false}));
myApp.use("/user",userApp); //whenever the route is /user our userApp is mounted
userApp.use("/",userRoute);
myApp.use("/student",studentApp);
studentApp.use("/",studentRoute)
myApp.use("/product",authenticateToken,productApp);
productApp.use("/",productRoute);
myApp.use("/cart",authenticateToken,cartApp);
cartApp.use("/",cartRoute);
myApp.use("/order",authenticateToken,orderApp);
orderApp.use("/",orderRoute);
myApp.use("/hobby",hobbyApp);
hobbyApp.use("/",hobbyRoute);
myApp.use("/review",authenticateToken,reviewApp);
reviewApp.use("/",reviewRoute);


//This in the backend actually calls http module from node and http.createServer() and apply that to our myApp
//which means this creates a server and starts listening in the given port
myApp.listen(PORT,()=>{
    console.log("Server listening on port ", PORT);
}); 