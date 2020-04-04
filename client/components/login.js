import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login">
          <h1>Welcome back!</h1>
          <p>Sign in to continue.</p>
          <form>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Password" />
            </div>
            <div>
              <button type="submit">Log In</button>
            </div>
          </form>
          <p>
            Need an account? <Link to="/signup">Sign up.</Link>
          </p>
        </div>
        <div className="illustration" />
      </div>
    )
  }
}

export default Login
