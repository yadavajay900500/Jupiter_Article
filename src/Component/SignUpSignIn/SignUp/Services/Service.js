
import RootService from "../../../../RootService";
const {api,postRequest}=RootService

// export const postUserDetails=(data)=>{
//     console.log("user",data)
//     return postRequest(api.signUp,data)
// }



export const postUserDetails=(data)=>{
    console.log("user",data)
    return postRequest(api.signUp,data)
}