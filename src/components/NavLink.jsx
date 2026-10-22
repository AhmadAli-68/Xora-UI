import { Link } from 'react-scroll'

const NavLink = ({ title, onClick }) => {
  return (
    <Link
      to={title}
      onClick={onClick}
      offset={-100}
      spy={true}
      smooth={true}
      activeClass='nav-active'
      className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
    >
      {title}
    </Link>
  )
}

export default NavLink