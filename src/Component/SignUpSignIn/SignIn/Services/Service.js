
import axios from "axios";
// import RootService from "../../../../RootService";
// const {api,postRequest}=RootService





// export const postLogInData=(data,dispatch)=>{
//     return postRequest(api.logIn,data)
// }

export const postLogInData=async(userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"})
    try{
       const pass = userCredentials.password
       const res = await axios.post(`http://localhost:2002/login`,userCredentials);
       console.log(res)
       dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }
    catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err})
    }
    // const BASEURL = 'http://localhost:2002/login';
    // const res = await axios.post(BASEURL, data);
    


}