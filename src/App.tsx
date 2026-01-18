import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import mainBg from './assets/arnold_conquer_no_sign_bq_final.png'

function App() {


  return (
    <div className="root-layout  w-full bg-fixed bg-no-repeat bg-[100%_100%]  bg-[length:150%] md:bg-[length:80%] " style={{backgroundImage: `url(${mainBg})`}}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
