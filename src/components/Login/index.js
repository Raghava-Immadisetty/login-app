import {Component} from 'react'

class Login extends Component {
  state = {text: 'Please Login', status: 'Login'}

  onClicking = () => {
    this.setState(prevState => {
      if (prevState.status === 'Login') {
        return {
          text: 'Welcome User',
          status: 'Logout',
        }
      }
      return {
        text: 'Please Login',
        status: 'Login',
      }
    })
  }

  render() {
    const {text, status} = this.state

    return (
      <div>
        <div>
          <h1>{text}</h1>
          <button onClick={this.onClicking}>{status}</button>
        </div>
      </div>
    )
  }
}

export default Login
