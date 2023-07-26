import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Layouts = () => {
  return (
    <div>
        <NavBar />
            <main className="w-[90%] mx-auto">
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default Layouts