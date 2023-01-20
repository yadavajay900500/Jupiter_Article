import axios from 'axios';
import APIEndPoints from './apiEndPoints';
import { toast } from 'react-toastify';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});



class RootService {

    // #BASEURL = 'https://reqres.in';
    #BASEURL = 'http://localhost:2002/';

    

    constructor(){
        console.log("Service Is Active");
    }

    // getRequest = async (endPoint, query) => {
    //     try {
    //         console.log("}}}}}}}}}}}}",endPoint,query)
    //         const url = new URL(this.#BASEURL + endPoint);
    //         console.log("_____________",url.href)
    //         Object.entries(query).forEach(([key, val]) => url.searchParams.append(key, val));
    //         const res = await axios.get(url.href);
    //         console.log(">>>>>>>>>>>>",res.data)
    //         (res.status === 200) && toast.success("Data Fetched Successfully");
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

   getRequest = async (endPoint, query) => {
        try {
            const url = new URL(this.#BASEURL + endPoint);
            Object.entries(query).forEach(([key, val]) => url.searchParams.append(key, val));
            const res = await axios.get(url.href);
            console.log(">>>>>>>>>>>>",res.data)
            (res.status === 200) && toast.success("Data Fetched Successfully");
        } catch (e) {
           console.error("Error in getRequset in...............",e);
            
        }
    }



    // function fetchProducts() {
    //     return async function fetchProductThunk(dispatch, getState) {
    //         dispatch(setStatus(STATUSES.LOADING));
    //         try {
    //             const res = await fetch('https://fakestoreapi.com/products');
    //             const data = await res.json();
    //             dispatch(setProducts(data));
    //             dispatch(setStatus(STATUSES.IDLE));
    //         } catch (err) {
    //             console.log(err);
    //             dispatch(setStatus(STATUSES.ERROR));
    //         }
    //     };
    // }


   

    postRequest = async (endPoint, body) => {
        try {
            const url = new URL(this.#BASEURL + endPoint);
            const res = await axios.post(url.href, body);
         
            (res.status === 200) && toast.success(res.data.msg);

        
        
        } catch (e) {
            console.log(e);
            toast.error("something Wrong");
     
        }
    }

}
const rootService = new RootService();


export default { 
    api: APIEndPoints,
    getRequest: rootService.getRequest,
    postRequest:rootService.postRequest
};