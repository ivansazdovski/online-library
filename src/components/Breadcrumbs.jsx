import { Breadcrumb } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  console.log('location ivan', location)

  let currentLink = ''

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
    currentLink += `/${crumb}`

    return (
      <div className="crumb" key={crumb}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    )
  })
  console.log('crumbs', crumbs)

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Books', link: '/books' },
    // Add more breadcrumb items as needed
  ];

  return (
    <Breadcrumb>
      {crumbs}
      {/* {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb.Item key={index} href={breadcrumb.link}>
          {index === breadcrumbs.length - 1 ? (
            breadcrumb.text
          ) : (
            <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
          )}
        </Breadcrumb.Item>
      ))} */}
    </Breadcrumb>
  )
}

export default Breadcrumbs