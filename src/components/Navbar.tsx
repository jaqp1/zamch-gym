import {NavLink} from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import Logo from '../assets/zamch_gym_logo_no_bg.png'

export const Navbar = () => {

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')

    if(mobileMenu?.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    }else{
      mobileMenu?.classList.add('hidden');
    }
  }

  return (
    <div className='nav flex justify-between align-center mx-8 xl:mx-14 my-7 xl:my-10 text-white mb-0'>
        <div className='flex items-end'>
          <NavLink to='/' className=' nav-logo '><img src={Logo} className='h-16 w-auto  md:h-18 xl:h-22'></img></NavLink>
          </div>
        <ul className="hidden md:flex items-center list-none gap-0 xl:gap-2 text-xs md:text-sm xl:text-base ">
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
        </ul>
        <button onClick={toggleMenu} className='md:hidden text-3xl p-2 z-50'>
          <i className='bx  bx-menu'></i> 
        </button>
        <div id='mobileMenu' className='hidden fixed top-24  right-0 left-0 p-5 md:hidden z-40  bg-black/50 backdrop-blur-xl '>
            <ul className="flex flex-col items-center list-none gap-6 text-xs md:text-sm xl:text-base ">
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
            </ul>
        </div>
    </div>
  )
}

export default Navbar