import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  const renderTooltip = (props) => (
    <Tooltip id="rating-tooltip" {...props}>
      Rating: {rating} / 5
    </Tooltip>
  )

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip}>
        <div>
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={index} color="gold" />
          ))}
          {halfStar && <FaStarHalfAlt color="gold" />}
          {[...Array(emptyStars)].map((_, index) => (
            <FaRegStar key={index} color="gold" />
          ))}
          {/* <span className="rating-tooltip" style={{ marginLeft: '8px' }}>Rating: {rating} / 5</span> */}
        </div>
      </OverlayTrigger>
    </div>
  )
}

export default StarRating