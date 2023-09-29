import LayerWhatSaid from './LayerWhatSaid'
import avatarAli from '../images/avatar-ali.png'

const WhatSaid = () => {
  return (
    <>
      <section className='wrapped text-center py-24 max-w-lg mx-auto md:max-w-xl'>
        <h2 className='text-3xl font-bold text-neutral-very-blue md:text-4xl'>
          What the've said
        </h2>
        <div className='mt-24 mb-14'>
          <article className='bg-neutral-light-gray pt-16 pb-12 px-4 relative'>
            <img
              src={avatarAli}
              alt='Image of Ali bravo, one of our best clients'
              className='absolute w-24 aspect-square -top-12 inset-x-0 mx-auto'
            />
            <h3 className='text-xl mb-4 pt-2 font-bold text-neutral-very-blue'>
              Ali Bravo
            </h3>
            <p className='text-neutral-dark-blue'>
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is more focused."
            </p>
          </article>
        </div>
        <a href='#' className='button mx-auto shadow-xl shadow-primary-red/30'>
          Get Started
        </a>
      </section>
      <LayerWhatSaid />
    </>
  )
}

export default WhatSaid
