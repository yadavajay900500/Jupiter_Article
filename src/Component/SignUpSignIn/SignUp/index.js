import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { postUserDetails } from "./Services/Service";



export const SignUp=()=>{
  const [user,setuser]=useState({
    name:'',
    email:'',
    phone:'',
    password:''
  });
const onChangeUserData=(e)=>{
  let key = e.target.name
  let val= e.target.value
  // setuser((pre)=>{
  //   // console.log(">>>>>>>>>>",{...pre})
  // return  {...pre,[key]:val}}
  //   //  {...pre,[e.target.name]:[e.target.value]}
  // );
  setuser((prev)=>{return {...prev,[key]:val}})
}
console.log("//////////",user)
const submitForm=async ()=>{
  console.log(">>>>>>>",user)
const data=await postUserDetails(user)
}

    return <>
     <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
        <div className="form-outline mb-4">
            <input type="text" id="form1Example23" className="form-control form-control-lg"
         name='name' value={user.userName} onChange={onChangeUserData}
             />
            <label className="form-label" for="form1Example23">Full Name</label>
          </div>
          
          <div className="form-outline mb-4">
            <input type="email"
            name="email" value={user.email} onChange={onChangeUserData}
            className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" 
            name="phone" value={user.phone} onChange={onChangeUserData}
             className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Phone No</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" 
              name="password" value={user.password} onChange={onChangeUserData}
            id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>
          {/* <button type="submit"
          onClick={()=>submitForm}
           className="btn btn-primary btn-lg btn-block">Sign Up</button> */}
          <Link className="btn btn-primary btn-lg btn-block" onClick={submitForm} >submit</Link>

        </form>
      </div>
    </div>
  </div>
</section>
    </>
}