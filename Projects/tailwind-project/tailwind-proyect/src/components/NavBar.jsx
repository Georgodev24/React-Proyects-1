import brandingLogo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='wrapped h-20 items-center flex justify-between'>
      <a href='/.' className='w-1/3 max-w-[140px]'>
        <img
          src={brandingLogo}
          alt='manage logo to landing page'
          className='w-full'
        />
      </a>

      <input type='checkbox' id='menu' className='peer hidden' />
      <label
        htmlFor='menu'
        className='bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden'></label>

      <div className='fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none'>
        <ul className='absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-primary-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static'>
          <li>
            <a href='#'>Pricing</a>
          </li>

          <li>
            <a href='#'>Product</a>
          </li>

          <li>
            <a href='#'>About Us</a>
          </li>

          <li>
            <a href='#'>Careers</a>
          </li>

          <li>
            <a href='#'>Community </a>
          </li>
        </ul>
      </div>
      <a
        href='#'
        className='button shadow-sm shadow-primary-red/30 hidden py-3 lg:block'>
        Get Started
      </a>
    </nav>
  )
}

export default Navbar
