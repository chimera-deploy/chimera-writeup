import React from 'react'
import { Link } from 'react-router-dom'
import colorLogo from '../images/Chimera_graphic_color.svg'

const Navbar = ({toggle}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white md:static flex justify-between place-items-center shadow-2xl">
        <Link to="/" className="flex-none ">
          <div className="h-20">
            <img src={colorLogo} alt="color chimera" className='h-full'/>
          </div>
        </Link>
      <nav className="grow h-20 md:flex hidden justify-end place-items-center px-8 font-koulen text-3xl text-tyrianpurple">
        {/* <Link to="/" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap ">Home</Link> */}
        <Link to="/" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Case Study</Link>
        <Link to="/presentation" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Presentation</Link>
        <Link to="/team" className="p-4 hover:bg-flame hover:text-white rounded-lg whitespace-nowrap">Our Team</Link>
        <a href="https://github.com/chimera-deploy/Chimera" target="_blank" rel="noopener noreferrer" className="hover:bg-flame rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 stroke-tyrianpurple fill-tyrianpurple hover:stroke-white hover:fill-white" width="64" height="64" x="0" y="0" viewBox="0 0 64 64" >
            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286a26.376 26.376 0 01-1.755-.479V50.85s-.975.325-2.275.325c-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792-.2-.567-.533-1.714-.533-3.583 0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zm1.813 51.93zm3.973-.584zM32 58zm-2.212-.1z"></path>
          </svg>
        </a>
      </nav>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="#69163E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>
    </div>
  )
}

export default Navbar
