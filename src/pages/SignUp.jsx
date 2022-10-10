import React from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/login/Login'

const SignUp = () => {
  const {signup} = useParams()

  console.log(signup);

  return (
    <>
      <Login />
    </>
  )
}

export default SignUp