import styled from 'styled-components';
import libraryImage1 from '../assets/libraryImage1.jpg'

const StyledHeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${libraryImage1});
  background-size: cover;
  background-position: center;
`;

const HeroImage = () => {

  return (
    <div>
      <StyledHeroImage />
    </div>
  )
}

export default HeroImage
