import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'


const StarRating = ({ rating, size = '1rem'}) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  const renderTooltip = (props) => (
    <Tooltip id="rating-tooltip" {...props}>
      Rating: {rating} / 5
    </Tooltip>
  )

  const createStars = (count, iconComponent) => {
    const stars = [];
    const IconComponent = iconComponent
    for (let i = 0; i < count; i++) {
      stars.push(<IconComponent key={i} color="gold" size={size} />);
    }
    return stars;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip}>
        <div>
          {createStars(fullStars, FaStar)}
          {halfStar && <FaStarHalfAlt color="gold" size={size} />}
          {createStars(emptyStars, FaRegStar)}
        </div>
      </OverlayTrigger>
    </div>
  )
}

export default StarRating