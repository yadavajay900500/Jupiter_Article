import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/AuthContext";
import { postLogInData } from "./Services/Service";


export const SignIn = () => {
  const [logInData, setLoginData] = useState({
    email:"",
    password:""
  });
  const {user,isFetching,error,dispatch} = useContext(AuthContext)
  const onchangeLogInData = async (e) => {
    const keys=e.target.name
    const values=e.target.value
    setLoginData((pre) => {
      return { ...pre, [keys]:values }
    })
  }
  const logInForm = async () => {
   
    const data = await postLogInData(logInData,dispatch)


  }
  // const google=()=>{
  //   console.log("***************")
  //   window.open("http://localhost:5000/auth/google","_self")
  // }
  return <>
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form1Example13"
                  name="email" value={logInData.email} onChange={onchangeLogInData}
                  className="form-control form-control-lg" />
                <label className="form-label" for="form1Example13">Email address</label>
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="form1Example23"
                  name="password" value={logInData.password} onChange={onchangeLogInData}
                  className="form-control form-control-lg" />
                <label className="form-label" for="form1Example23">Password</label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                  <label className="form-check-label" for="form1Example3"> Remember me </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>


              {/* <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button> */}
              <Link className="btn btn-primary btn-lg btn-block" onClick={logInForm}>Sign in</Link>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a className="btn btn-primary btn-lg btn-block" id="facebook" href="#!"
                role="button">
                <i className="fab fa-facebook-f me-2" ></i>Continue with Facebook
              </a>
              <Link className="btn btn-primary btn-lg btn-block" id="google"
                role="button">
                <i className="fab fa-twitter me-2" ></i>Continue with Google</Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
}