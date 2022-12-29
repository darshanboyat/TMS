import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const auth = localStorage.getItem('auth')
    return auth ? true : false;
}

const Index = () => {
const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to = "/auth/signin" />
}

export default Index