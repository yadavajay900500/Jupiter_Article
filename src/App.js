import './App.css';
import Header from './Component/Header/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile';
import Icons from './Pages/Icons';
import CrudOperations from './Pages/CrudOperations';
import { IotProject } from './Pages/IOT_Project';
import { IotHome } from './Pages/iotPages/iotHome';
import { IotElectrical} from './Pages/iotPages/iotElectrical';
import { SignIn } from './Component/SignUpSignIn/SignIn';
import { SignUp } from './Component/SignUpSignIn/SignUp';
import { AuthContextProvider } from './ContextApi/AuthContext';
import Footer from './Component/Footer/Footer'


function App() {

  const routes = useRoutes([
    { path: '/', element : <Home/>},
    { path:'/icons', element: <Icons/> },
    {
      path:'/profile' , element: <Profile/>,  children : [
        { path:'icons', element: <Icons/> },
      ]},
      {
        path:'/api' , element:<CrudOperations/>
      },
      {path:'/login', element:<SignIn/>},
      {path:'/signup', element:<SignUp/>},
      {
        path:'/iotProject', element:<IotProject/>, children:[
        { path:'iotHome' , element:<IotHome/>},
        { path:'iotElectrical', element:<IotElectrical/> }

        ]
      }

    
  
  ])


  return <>

    <Header />
    {/* <h1>Hello WeB</h1> */}

<AuthContextProvider>
{ routes }
</AuthContextProvider>
<hr/>
<Footer/>
    <ToastContainer
      // position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
  </>
}
export default App;
