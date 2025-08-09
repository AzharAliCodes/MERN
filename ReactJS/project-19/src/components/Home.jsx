import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()

  return (
    <div className="bg-black min-h-screen">

      <div className="bg-blue-900 text-white max-w-2xl mx-auto flex justify-evenly items-center pt-3 ">
        <Link
          to="/"
          className={`px-3 py-1 rounded-md text-sm sm:text-base transition duration-200 
            ${location.pathname === '/' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>Matches</h2>
        </Link>

        <Link
          to="/news"
          className={`px-3 py-1 rounded-md text-sm sm:text-base transition duration-200 
            ${location.pathname === '/news' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>News</h2>
        </Link>

        <Link
          to="/tables"
          className={`px-3 py-1 rounded-md text-sm sm:text-base transition duration-200 
            ${location.pathname === '/tables' 
              ? 'bg-blue-700 underline underline-offset-4' 
              : 'hover:bg-blue-800'}`
          }
        >
          <h2>Table</h2>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Home
