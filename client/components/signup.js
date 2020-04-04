import React from 'react'
import {Link} from 'react-router-dom'

class Signup extends React.Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup">
          <h1>Welcome</h1>
          <p>Create an account to continue.</p>
          <form>
            <div>
              <input placeholder="First name" />
            </div>
            <div>
              <input placeholder="Last name" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Password" />
            </div>
            <div>
              <button type="submit">Next</button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Login.</Link>
          </p>
        </div>
        <div className="illustration" />
      </div>
    )
  }
}

export default Signup
