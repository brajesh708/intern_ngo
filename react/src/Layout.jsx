
import { Link,Outlet } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
    <Link to={Navbar}></Link>

<Outlet/>


<Footer/>

    </>
  )
}

export default Layout