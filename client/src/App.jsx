var Router = window.ReactRouterDOM.BrowserRouter;
var Route =  window.ReactRouterDOM.Route;
var Link =  window.ReactRouterDOM.Link;
var Prompt =  window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;
var browserHistory = window.ReactRouter.browserHistory;

var api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const createAccount = payload => api.post(`/account`, payload)

const apis = {createAccount}

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/billing' component={Billing} />
          <Route path='/confirmation' component={Confirmation} />
        </Switch>
      </div>
      </Router>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <Link to="/account">
          <button>Checkout</button>
        </Link>
      </div>
    ) 
  } 
}

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleAccountCreation = this.handleAccountCreation.bind(this)
  }
  
  handleNameChange(e) {
    const name = e.target.value
    this.setState({name})
  }

  handleEmailChange(e) {
    const email = e.target.value
    this.setState({email})
  }

  handlePasswordChange(e) {
    const password = e.target.value
    this.setState({password})
  }

  handleAccountCreation() {
    const { name, email, password } = this.state
    const payload = {name, email, password}

    apis.createAccount(payload)
      .then((r) => r.json())
      .then((r) => console.log(r.message))
      .then(() => this.props.history.push('/shipping'))
  }

  render() {
    const {name, email, password} = this.state
    return (
      <div> 
        <h1>Make an account!</h1>
        <label>Name</label>
        <input type='text' placeholder='Name' value={name} onChange={this.handleNameChange}></input>
        <label>Email</label>
        <input type='email' placeholder='Email' value={email} onChange={this.handleEmailChange}></input>
        <label>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={this.handlePasswordChange}></input>
        <button type='submit' onClick={this.handleAccountCreation}>Next</button>
      </div>
    )
  }
}

class Shipping extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div> 
        <h1>Shipping Information</h1>
        <input type='text' placeholder='Street'></input>
        <input type='text' placeholder='Apt/Unit #'></input>
        <input type='text' placeholder='City'></input>
        <input type='text' placeholder='State'></input>
        <input type='text' placeholder='Zip Code'></input>
        <Link to="/billing">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

class Billing extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div> 
        <h1>Billing Information</h1>
        <input type='text' placeholder='Card Number'></input>
        <input type='text' placeholder='Expiration Date'></input>
        <input type='password' placeholder='CVV'></input>
        <input type='text' placeholder='Zip Code'></input>
        <Link to="/confirmation">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div> 
        <h1>Order Confirmation</h1>
        <Link to="/">
          <button>Place Order</button>
        </Link>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
