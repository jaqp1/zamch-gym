import {NavLink} from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'

export const Navbar = () => {
  return (
    <div className='nav flex justify-between align-center mx-12 xl:mx-24 my-10 xl:my-16 text-white mb-0'>
        <div>
          <NavLink to='/' className='nav-logo text-l md:text-2xl xl:text-4xl font-medium font-navbar-title'>Zamch Gym</NavLink>
          </div>
        <ul className="flex items-center list-none gap-2 text-xs md:text-sm xl:text-base ">
            <li><NavLink to='/' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-1 px-4 md:py-2 md:px-8  bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-1 px-4 md:py-2 md:px-8 bg-transparent  '
            }>Start</NavLink></li>
            <li><NavLink to='/rules' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-1 px-4 md:py-2 md:px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-1 px-4 md:py-2 md:px-8 bg-transparent '
            }>Regulamin</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-1 px-4 md:py-2 md:px-8 whitespace-nowrap bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-1 px-4 md:py-2 md:px-8 whitespace-nowrap bg-transparent '
            }>O siłowni</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-1 px-4 md:py-2 md:px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-1 px-4 md:py-2 md:px-8 bg-transparent '
            }>Kontakt</NavLink></li>
            <li><NavLink to='/trainingGenerator' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-1 px-4 md:py-2 md:px-8 whitespace-nowrap bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-1 px-4 md:py-2 md:px-8 whitespace-nowrap bg-transparent '
            }>Generator treningu</NavLink></li>
            <li>
                <i className='bxr  bx-menu-wider'></i> 
            </li>
        </ul>
    </div>
  )
}

export default Navbar