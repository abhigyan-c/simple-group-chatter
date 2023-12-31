import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import '../index.css'



const LoginPage = () => {
  const {user, handleUserLogin} = useAuth()
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",
  })

  const navigate = useNavigate()

  useEffect(() => {
    if(user)
    {
      navigate('/')
    }
  }, [])


const handleInputChange = (e) => {
  let name = e.target.name
  let value = e.target.value
  setCredentials({...credentials, [name]:value})
}

  return (
    <div className="auth--container">
      <div className="form-wrapper">
        <form onSubmit={(e) => {handleUserLogin(e, credentials)}}>

          <div className="field--wrapper">
            <label>Email: </label>
            <input
              required 
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleInputChange}
              />
          </div>

          <div className="field--wrapper">
            <label>Password: </label>
            <input 
              required
              type="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleInputChange}
              />
          </div>

          <div className="field--wrapper">
            <input
              className="btn btn--lg btn--main"
              type="submit"
              value="Login"
            />
          </div>

        </form>
        <p>Register new account <Link to="/register">here</Link></p>
      </div>
    </div>
  )
}

export default LoginPage