import React, { useState } from 'react'
import facebookLogo from '../../images/icon-facebook.svg'
import youtubeLogo from '../../images//icon-youtube.svg'
import twitterLogo from '../../images/icon-twitter.svg'
import pinterestLogo from '../../images/icon-pinterest.svg'
import instagramLogo from '../../images/icon-instagram.svg'
import brandingLogo from '../../images/logo.svg'
import { validation, validEmail } from '../../logic/validation'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorFound = validation(email)
    if (errorFound) {
      setError(errorFound)
    } else {
      setError('Continue')
    }
  }

  return (
    <footer className='bg-neutral-very-blue py-24'>
      <section className='wrapped grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch'>
        <form
          className='flex gap-4 min-w-[100px] w-full [grid-area:form]'
          onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Updates in your email...'
            className='min-w-[50px] flex-1 rounded-full px-4'
            onSubmit={handleChange}
          />

          <input
            type='submit'
            value='GO'
            className='py-3 px-8 bg-primary-red rounded-full text-white hover:bg-hover-input'
          />
        </form>
        {error && <p className='text-red-500'>{error}</p>}

        <nav className='grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white text-left w-4/5 [grid-area:navigation] md:w-full'>
          <a href='#' className='hover:text-primary-red'>
            Home
          </a>
          <a href='#' className='hover:text-primary-red'>
            Pricing
          </a>
          <a href='#' className='hover:text-primary-red'>
            Products
          </a>
          <a href='#' className='hover:text-primary-red'>
            About Us
          </a>
          <a href='#' className='hover:text-primary-red'>
            Careers
          </a>
          <a href='#' className='hover:text-primary-red'>
            Community
          </a>
          <a href='#' className='hover:text-primary-red'>
            Privacy Policy
          </a>
        </nav>

        <div className='flex flex-wrap gap-4 justify-between w-full [grid-area:social]'>
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
          <img src={brandingLogo} />
        </a>

        <p className='text-neutral-dark-blue text-center [grid-area:copy] md:text-right'>
          Copyright 2020. All Rights Reserved
        </p>
      </section>
    </footer>
  )
}

export default Footer
