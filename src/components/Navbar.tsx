import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav flex justify-between align-center mx-24 my-16 text-white'>
        <div>
          <NavLink to='/' className='nav-logo text-3xl font-medium font-navbar-title'>Zamch Gym</NavLink>
          </div>
        <ul className="flex items-center list-none gap-12 text-l">
            <li><NavLink to='/' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-2 px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-2 px-8 bg-transparent  '
            }>Start</NavLink></li>
            <li><NavLink to='/rules' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-2 px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-2 px-8 bg-transparent '
            }>Regulamin</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-2 px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-2 px-8 bg-transparent '
            }>O siłowni</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) =>
              isActive 
              ? 'rounded-3xl py-2 px-8 bg-neutral-200 text-neutral-700' 
              : 'rounded-3xl py-2 px-8 bg-transparent '
            }>Kontakt</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar