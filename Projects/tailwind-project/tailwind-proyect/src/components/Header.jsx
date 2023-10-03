import shadowFigure from '../images/bg-tablet-pattern.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <figure className='absolute inset-0 pointer-events-none overflow-hidden'>
        <img
          src={shadowFigure}
          className='absolute w-full -z-10 -top-24 -right-1/4 max-w-2xl'
        />
      </figure>
    </>
  )
}

export default Header
