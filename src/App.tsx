import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import mainBg from './assets/arnold_conquer_no_sign_bq_final.png'

function App() {


  return (
    <div className="root-layout min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat" style={{backgroundImage: `url(${mainBg})`}}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
