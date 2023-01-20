import { Link } from "react-router-dom";
import RootService from "../../RootService";
const { api, getRequest } = RootService;

function Header(){

    const handleReq = async() => {
     const data = await getRequest(api.apiList, {pages: 2});
     console.log(data);
    }

    return <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"
          onClick={handleReq} href="#">Home</a> */}
          <Link className="nav-link" to="/">Home</Link>

          
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="profile">Profile</a> */}
          <Link className="nav-link" to="profile">Profile</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Api
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Post Api</a></li>
            <li><a className="dropdown-item" href="#">Get Api</a></li>
            <li><a className="dropdown-item" href="#">Put Api</a></li>
            <li><a className="dropdown-item" href="#">Patch Api</a></li>
            <li><a className="dropdown-item" href="#">Delete Api</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="api">Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="icons">Icons</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="newTech" >New Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="iotProject" > IOT Project</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link ">Blogs</a> */}
          <Link className="nav-link" to="blogs" >Blogs</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link ">Blogs</a> */}
          <Link className="nav-link" to="sendSMS" >Send SMS</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link ">About</a> */}
          <Link className="nav-link" to="about" >About</Link>

        </li>

        <li className="nav-item">
          <Link className="nav-link" to="logIn" >login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="signup" >SignUp</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
}

export default Header ;