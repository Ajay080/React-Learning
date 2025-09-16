import React from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
  const { setUser } = React.useContext(UserContext);
  const [userName, setUserName] = React.useState("");

  const handleLogin = () => {
    // Simulate a login
    setUser({ name: userName });
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login