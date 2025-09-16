import React from 'react'
import UserContext from '../context/UserContext'
import {Link} from 'react-router-dom'
const Home = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <div>Home - Current User: {user ? user.name : "Guest"}</div>
      <Link to="/">Login</Link>
      <Link to="/about">About</Link>
    </>
  )
}

export default Home