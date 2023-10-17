import React from 'react'

const ClientCard = ({ name, content, img }) => {
  return (
    <>
      <section className='wrapped text-center py-24 max-w-lg mx-auto md:max-w-xl'>
        <div className='mt-24 mb-14'>
          <article className='bg-neutral-light-gray pt-16 pb-12 px-4 relative'>
            <img
              src={img}
              alt='Image of Ali bravo, one of our best clients'
              className='absolute w-24 aspect-square -top-12 inset-x-0 mx-auto'
            />
            <h3 className='text-xl mb-4 pt-2 font-bold text-neutral-very-blue'>
              {name}
            </h3>
            <p className='text-neutral-dark-blue text-center'>{content}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ClientCard
