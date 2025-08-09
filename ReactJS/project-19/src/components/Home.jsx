import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const Home = () => {
  const location = useLocation()

  return (
    <>
      <div className="bg-blue-900 text-white flex gap-6 p-4">
        <Link
          to="/"
          className={`px-3 py-1 rounded-md transition duration-200 
            ${location.pathname === '/' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>Matches</h2>
        </Link>

        <Link
          to="/news"
          className={`px-3 py-1 rounded-md transition duration-200 
            ${location.pathname === '/news' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>News</h2>
        </Link>

        <Link
          to="/tables"
          className={`px-3 py-1 rounded-md transition duration-200 
            ${location.pathname === '/tables' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>Table</h2>
        </Link>
      </div>

      <Outlet />
    </>
  )
}

export default Home
