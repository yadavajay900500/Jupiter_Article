import { useContext } from "react";
import { AuthContext } from "../../../ContextApi/AuthContext";
import RootService from "../../../RootService";
const { api, getRequest } = RootService;





//this is used for endPoint od the URL
export const getUserDetails = (query) => {
  return  getRequest(api.apiList, query);
}
export const getFlagData = (query) => {

  console.log("####################qqqq",api.apiFlagData,query)
  return  getRequest(api.apiFlagData, query);
}