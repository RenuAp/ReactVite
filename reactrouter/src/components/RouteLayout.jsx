import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"

const RouteLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/> 
      <Footer/>
    </>
  )
}

export default RouteLayout
