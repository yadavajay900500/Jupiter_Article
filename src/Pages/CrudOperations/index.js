// const CrudOperations = () => { 

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
import RootService from "../../RootService";
import { getUserDetails,getFlagData } from "./Services/service";
const { api, getRequest } = RootService;


// }

function CrudOperations() {
    const [dataSource, setDataSource] = React.useState([]);


    const userCredentials=useContext(AuthContext)
    console.log("&&&&&&&&&&&&&&&&&&&&&&",userCredentials.user.userData)

    const handleReq = async () => {
        //  const data = await getRequest(api.test, {pages: 2}); 
        // ?email=ajay900@gmail.com
        const data = await getUserDetails({ email: "ajay900@gmail.com" });
        setDataSource(data.data);
        console.log("?///1111111111111111111111111////", api.apiList)
        console.log("++++++1111111111111111111111111111++++++", data);
    }
    const getFlagDataApi= async () => {

        console.log("?????????/")
        const data = getFlagData({ email: "ajay900@gmail.com" });
        
        setDataSource(data.data);
        console.log("8888888888888",data)

        console.log("((((((999999999999",dataSource)
    }
    return <>
      <div className="container">
      <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link className="btn btn-primary" onClick={handleReq} >Get Api</Link>
                        <Link className="btn btn-primary" onClick={getFlagDataApi} >Flag Api</Link>
                    </div>
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                               
                            </tr>
                     
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      </div>
    </>
}

export default CrudOperations;