
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'


const BuilderPage: React.FC = () => {
  const location = useLocation()


  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center py-8'>

          <div style={{
            display: 'block',
            width: 700,
            padding: 30
          }}>
            <Dropdown>

              <Dropdown.Toggle variant="success">
                select api
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === '/crafted/widgets/tables' && 'active')
                    }
                    to='/crafted/widgets/tables'
                  >
                    API 1
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === '/crafted/widgets/tables' && 'active')
                    }
                    to='/crafted/widgets/tables'
                  >
                    API 2
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === '/crafted/widgets/tables' && 'active')
                    }
                    to='/crafted/widgets/tables'
                  >
                    API 3
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

        </div>
      </div>


    </>
  )
}

export { BuilderPage }
