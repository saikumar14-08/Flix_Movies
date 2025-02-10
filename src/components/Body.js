
import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux';

export const Body = () => {
  // The hooks should be in the starting of the page.

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])


  return (
    <RouterProvider router={appRouter} />
  )
}
