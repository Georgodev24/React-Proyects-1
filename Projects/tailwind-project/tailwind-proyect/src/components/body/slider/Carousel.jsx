import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import anishaAvatar from '../../../images/avatar-anisha.png'
import avatarAli from '../../../images/avatar-ali.png'
import avatarRichard from '../../../images/avatar-richard.png'
import avatarShanai from '../../../images/avatar-shanai.png'

import Slider from 'react-slick'
import ClientCard from './ClientCard'

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const users = [
    {
      name: 'Anisha Li',
      content:
        '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
      img: anishaAvatar,
    },
    {
      name: 'Ali Bravo',
      content:
        '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is more focused."',
      img: avatarAli,
    },
    {
      name: 'Richard Watts',
      content:
        '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!"',
      img: avatarRichard,
    },
    {
      name: 'Shanai Gough',
      content:
        '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
      img: avatarShanai,
    },
  ]

  return (
    <>
      <div className='carousel'>
        <h2 className='text-3xl font-bold text-neutral-very-blue md:text-4xl'>
          What the've said
        </h2>
        <Slider {...settings}>
          {users.map(({ name, content, img }) => (
            <div key={name} className='box'>
              <ClientCard name={name} content={content} img={img} />
            </div>
          ))}
        </Slider>
        <a
          href='#'
          className='button button-hover mx-auto mb-10 shadow-xl shadow-primary-red/30'>
          Get Started
        </a>
      </div>
    </>
  )
}

export default Carousel
