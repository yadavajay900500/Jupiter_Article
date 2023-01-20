import { Link, Outlet } from "react-router-dom"


export const HeaderPages=()=>{
    return <>
    {/* <Outlet/> */}
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
    <Link className="nav-link" to="iotHome">Home</Link>
         
          {/* <a class="nav-link active" aria-current="page" href="iotHome">Home</a> */}
        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotElectrical">ELECTRICAL</Link>

        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotElectronics">ELECTRONICS</Link>

        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotCommunication">COMMUNICATION</Link>

        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotRobotics">ROBOTICS</Link>

        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotProject">PROJECT</Link>

        </li>
        <li class="nav-item">
    <Link className="nav-link" to="iotGeneral">GENERAL</Link>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}