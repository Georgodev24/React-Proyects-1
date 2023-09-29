import facebookLogo from '../images/icon-facebook.svg'
import youtubeLogo from '../images//icon-youtube.svg'
import twitterLogo from '../images/icon-twitter.svg'
import pinterestLogo from '../images/icon-pinterest.svg'
import instagramLogo from '../images/icon-instagram.svg'
import brandingLogo from '../images/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-neutral-very-blue py-24'>
      <section className='wrapped grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch'>
        <form className='flex gap-4 w-full min-w-[100px] [grid-area:form]'>
          <input
            type='email'
            placeholder='Updates in your inbox...'
            className='min-w-[50px] flex-1 rounded-full px-4'
          />
          <input
            type='submit'
            value='GO'
            className='py-3 px-8 bg-primary-red rounded-full text-white cursor-pointer-'
          />
        </form>
        <nav className='grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full'>
          <a href='#'>Home</a>
          <a href='#'>Products</a>
          <a href='#'>Careers</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Pricing</a>
          <a href='#'>About Us</a>
          <a href='#'>Community</a>
        </nav>
        <div className='flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]'>
          <a href='#'>
            <img src={facebookLogo} alt='Logo of Facebook' className='w-8' />
          </a>
          <a href='#'>
            <img src={youtubeLogo} alt='Logo of Youtube' className='w-8' />
          </a>
          <a href='#'>
            <img src={twitterLogo} alt='Logo of Twitter' className='w-8' />
          </a>
          <a href='#'>
            <img src={pinterestLogo} alt='Logo of Pinterest' className='w-8' />
          </a>
          <a href='#'>
            <img src={instagramLogo} alt='Logo of Instagram' className='w-8' />
          </a>
        </div>

        <a href='#' className='[grid-area:logo]'>
          <img src={brandingLogo} alt='logo' />
        </a>

        <p className='text-neutral-dark-blue text-center [grid-area:copyright] md:text-right'>
          Copyright 2020. All Rights Reserved
        </p>
      </section>
    </footer>
  )
}

export default Footer
