import illustrationIntro from '../images/illustration-intro.svg'

const Intro = () => {
  return (
    <section className='wrapped grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md: py-24'>
      <img
        src={illustrationIntro}
        alt='image to welcome you to landing page'
        className='w-full max-w-lg md:order-1'
      />
      <article className='text-center space-y-6 md:text-left md:space-y-8'>
        <h1 className='text-4xl font-bold text-neutral-very-blue md:text-5xl'>
          Bring everyone together to build better products.
        </h1>
        <p className='text-neutral-dark-blue'>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <a
          href='#'
          className='button button-hover mx-auto shadow-2xl shadow-primary-red/30 md:mx-0'>
          Get Started
        </a>
      </article>
    </section>
  )
}

export default Intro
