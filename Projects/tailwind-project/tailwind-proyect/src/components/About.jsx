const About = () => {
  return (
    <main>
      <section className='wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left'>
        <article>
          <h2 className='text-3xl font-bold text-neutral-very-blue mb-6 md:text-4xl md:'>
            What's different about Manage?
          </h2>

          <p className='text-neutral-dark-blue mb-6'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is taylor-made for modern digital product
            teams.
          </p>
        </article>

        <div className='grid gap-12'>
          <article className='space-y-4 md:space-y-6'>
            <p className='bg-neutral-pale-red rounded-l-full font-bold flex items-center md:bg-transparent'>
              <span className='bg-primary-red text-white px-6 rounded-full py-2'>
                01
              </span>
              <span className='flex-1 p-2'>Track company-wide progress</span>
            </p>

            <p className='text-neutral-dark-blue text-left'>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </article>

          <article className='space-y-4 md:space-y-6'>
            <p className='bg-neutral-pale-red rounded-l-full font-bold flex items-center md:bg-transparent'>
              <span className='bg-primary-red text-white px-6 rounded-full py-2 '>
                02
              </span>
              <span className='flex-1 p-2'>Advanced built-in reports</span>
            </p>

            <p className='text-neutral-dark-blue text-left'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </article>

          <article className='space-y-4 md:space-y-6'>
            <p className='bg-neutral-pale-red rounded-l-full font-bold flex items-center md:bg-transparent'>
              <span className='bg-primary-red text-white px-6 rounded-full py-2'>
                03
              </span>
              <span className='flex-1 p-2'>
                Everything you need in one place
              </span>
            </p>

            <p className='text-neutral-dark-blue text-left'>
              Stop jumpling from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default About
