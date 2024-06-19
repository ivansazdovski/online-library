import { Breadcrumb } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  console.log('location ivan', location)

  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs