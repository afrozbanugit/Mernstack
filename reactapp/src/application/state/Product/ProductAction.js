import * as ActionType from "../ActionTypes";
import axios from "../../config/axiosConfiguration";

let AddProductToStore = (products)=>{
    return{
        type:ActionType.ADD_PRODUCT,
        payload:{products:products}
    }
}

export let saveProductToDB =(product)=>{
    return( async function(dispatcher){
        try{
            console.log(product);
            let rawData =await fetch('http://localhost:9000/product/api/addProduct',
                {
                    method:'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(product)
                });
            
            let addedProduct = await(rawData.json())
            console.log("Added Product ",addedProduct);
           await dispatcher(FetchProductsFromDB());//fetched at the time of save it self
          //  dispatcher(AddProductToStore(addedProduct));
        }catch(error){
            console.log("Error while adding product to database",error);
        }
    })
}

/* export const AddProductsUsingAxios = (productObj)=>{
    return (function(dispatch){
        axios.post("http://localhost:9000/product/api/addProduct",productObj)
        .then((axiosResponse)=>{
            console.log(axiosResponse);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
} */



export let FetchProductsFromDB =()=>{
    return(function(dispatch){
        axios.get("http://localhost:9000/product/api/getAllProducts")
        .then((axiosResponse)=>{
          //  console.log("Data from database ",axiosResponse);
            let productsArray = axiosResponse.data;
            console.log("Products Array received through AxiosResponse", productsArray);
            dispatch(AddProductToStore(productsArray));
        })
        .catch((error)=>{
            console.error("Error while fetching products from DB ",error);
        })
    })
}
