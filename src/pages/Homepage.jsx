import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'

import HeroImage from '../components/HeroImage'
import { useBooksContext } from '../stores/BooksProvider'
import 'react-multi-carousel/lib/styles.css'
import { colors } from '../styles/colors'


const StyledContainer = styled.div`
  .title {
    text-align: center;
    color: ${colors.blue2};
    text-transform: uppercase;
    margin: 1rem 0;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-size: 2rem;
  }

  .title span {
  }

  .title span:nth-of-type(2) {
    margin-left: 40px;
  }
`

const StyledCarouselWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 0 0;

  h4 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    color: ${colors.blue2}
  }

  .user-card {
    max-width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 25px;
    color: ${colors.blue2};
    font-weight: 500;
  }

  img {
    border-radius: 50%;
  }

  .name {
    font-size: 1.5rem;
  }
  
  .email {
    opacity: 0.5;
  }
  
  p {
    margin-top: 1em;
    font-style: italic;
  }
`

const HomePage = () => {
  useBooksContext()
  const { activeUsers, getMostActiveUsers } = useBooksContext()

  useEffect(() => {
    getMostActiveUsers()
  }, [getMostActiveUsers])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 4
    },
    tablet: {
      breakpoint: { max: 1023, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0},
      items: 1,
    }
  }

  return (
    <StyledContainer>
      <div className="title">
        <h1>Explore endless worlds within the pages of our library</h1>
      </div>
      <HeroImage />
      <StyledCarouselWrapper>
        <h4>Readers of the month</h4>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {activeUsers && activeUsers.map(user => {
            console.log('am i getting here', user)
            return (
              <div className="user-card" key={user.id}>
                <img src={user.avatar} />
                <span className="name">{user.first_name} {user.last_name}</span>
                <span className="email">{user.email}</span>
                <p>Proident dolor anim officia ad id reprehenderit consectetur non veniam nulla deserunt.</p>
            </div>
            )
          })}
        </Carousel>
      </StyledCarouselWrapper>
    </StyledContainer>
  )
}

export default HomePage
