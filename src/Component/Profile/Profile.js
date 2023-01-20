import { Link, Outlet } from "react-router-dom";


function Profile(){
    return <>
    <h1>Profile is Working</h1>
    <Outlet/>
    <button type="button" class="btn btn-secondary">
    <Link className="nav-link" to="icons">Profile</Link>
    </button>

    </>
}

export default Profile;