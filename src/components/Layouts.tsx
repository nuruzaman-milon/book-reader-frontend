import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Layouts = () => {
  return (
    <>
        <NavBar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </>
  )
}

export default Layouts