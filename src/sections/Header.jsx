import { Link } from 'react-scroll'
import NavLink from '../components/NavLink'
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [HasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <header className={clsx(
      'fixed top-0 left-0 z-50 w-full transition-all duration-500',
      HasScrolled ? 'py-2 bg-black-100 backdrop-blur-3xl' : 'max-lg:py-4 py-10'
    )}>
      <div className='container h-14 flex items-center max-lg:px-5'>
        <Link
          to='hero'
          offset={-250}
          spy={true}
          smooth={true}
          onClick={() => setIsOpen(false)}
          className={clsx('lg:hidden flex-1 cursor-pointer z-2', IsOpen && 'invisible')}
        >
          <img
            src='/images/xora.svg'
            alt='logo'
            width={115}
            height={55}
          />
        </Link>

        <div
          className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
            IsOpen
              ? 'max-lg:opacity-100'
              : 'max-lg:pointer-events-none'
          )}>
          <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLink title='features' onClick={() => setIsOpen(false)} />
                  <div className='dot' />
                  <NavLink title='pricing' onClick={() => setIsOpen(false)} />
                </li>
                <li className='nav-logo'>
                  <Link
                    to='hero'
                    offset={-250}
                    spy={true}
                    smooth={true}
                    className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                  >
                    <img
                      src='/images/xora.svg'
                      width={160}
                      height={55}
                      alt='logo'
                    />
                  </Link>
                </li>
                <li className='nav-li'>
                  <NavLink title='faq' onClick={() => setIsOpen(false)} />
                  <div className='dot' />
                  <NavLink title='download' onClick={() => setIsOpen(false)} />
                </li>
              </ul>
            </nav>

            <div className='lg:hidden block absolute top-1/2 left-0 w-960 h-95 -translate-x-72.5 -translate-y-1/2 rotate-90'>
              <img
                src='/images/bg-outlines.svg'
                width={960}
                height={380}
                className='relative z-2'
                alt='' />
              <img
                src='/images/bg-outlines-fill.png'
                width={960}
                height={380}
                className='absolute inset-0 mix-blend-soft-light opacity-5'
                alt='' />
            </div>
          </div>
        </div>

        <button
          className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center cursor-pointer'
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${IsOpen ? 'close' : 'magic'}.svg`}
            alt='menu-button'
            className='size-1/2 object-contain'
          />
        </button>
      </div>
    </header>
  )
}

export default Header