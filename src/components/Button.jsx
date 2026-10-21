import clsx from 'clsx'
import Marker from './Marker'

const Inner = ({ icon, children, markerFill }) => (
  <>
    <span className='relative flex items-center justify-center min-h-15 px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
      <span className='absolute -left-px'>
        <Marker markerFill={markerFill} />
      </span>

      {icon && (
        <img
          src={icon}
          className='size-10 mr-5 object-contain z-10'
          alt='circle' />
      )}

      <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>
        {children}
      </span>
    </span>

    <span className='glow-before glow-after' />
  </>
)

const Button = ({ children, href, containerClassName, onCLick }) => {

  return href ? (
    <a className={clsx(
      'relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName
    )}
      href={href}
    >
      <Inner icon='/images/zap.svg'>
        {children}
      </Inner>
    </a>
  )
    : (
      <button className={clsx(
        'relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName
      )}
        onClick={onCLick}
      >
        <Inner icon='/images/zap.svg'>
          {children}
        </Inner>
      </button>
    )
}

export default Button