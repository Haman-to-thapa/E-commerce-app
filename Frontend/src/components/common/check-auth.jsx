import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({ isAuthenticated, user, children }) => {

  const location = useLocation()

  //checking there not direct enter to without login page
  if (!isAuthenticated &&
    !(location.pathname.includes('/login') ||
      location.pathname.includes('/register'))) {

    return <Navigate to='/auth/login' />
  }


  // checking there right  authentication to login page
  if (isAuthenticated &&
    (location.pathname.includes('/login') ||
      location.pathname.includes('/register'))) {

    if (user?.role === 'admin') {
      return <Navigate to='/admin/dashboard' />
    } else {
      return <Navigate to='/shop/home' />
    }
  }


  // noValid enter to show error message
  if (isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes('admin')) {

    return <Navigate to='unauth-page' />
  }

  if (isAuthenticated &&
    user.role === "admin" &&
    location.pathname.includes('shop')) {

    return <Navigate to='admin/dashboard' />
  }
  return <>{children}</>
}

export default CheckAuth



// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'

// const CheckAuth = ({ isAuthenticated, user, children }) => {

//   const location = useLocation()


//   try {

//     if (!isAuthenticated &&
//       !(location.pathname.includes('/login') &&
//         location.pathname.includes('/register'))) {

//       return <Navigate to="/auth/login" />
//     }

//     if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {

//       if (user?.role === "admin") {
//         return <Navigate to='/admin/dashboard' />
//       } else {
//         return <Navigate to='/shop/home' />
//       }
//     }

//     if (isAuthenticated && user?.role !== "admin" && location.pathname.includes('admin')) {
//       return <Navigate to="/unauth-page" />
//     }

//     if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
//       return <Navigate to='/admin/dashboard' />
//     }


//   } catch (error) {
//     console.log(error)

//   }

//   return (
//     <>{children}</>)
// }

// export default CheckAuth

