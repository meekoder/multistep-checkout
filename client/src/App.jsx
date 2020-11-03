var Router = window.ReactRouterDOM.BrowserRouter;
var Route =  window.ReactRouterDOM.Route;
var Link =  window.ReactRouterDOM.Link;
var Prompt =  window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;
var browserHistory = window.ReactRouter.browserHistory;

var api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

const createAccount = payload => api.post(`/account`, payload);
const addShipping = payload => api.post(`/shipping`, payload);

const apis = {createAccount, addShipping};

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
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    this.props.history.push('/account');
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    ) 
  } 
}

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAccountCreation = this.handleAccountCreation.bind(this);
  }
  
  handleNameChange(e) {
    const name = e.target.value;
    this.setState({name});
  }

  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({email});
  }

  handlePasswordChange(e) {
    const password = e.target.value;
    this.setState({password});
  }

  handleAccountCreation() {
    const {name, email, password} = this.state;
    const payload = {name, email, password};

    apis.createAccount(payload)
      .then((r) => r.json())
      .then((r) => console.log(r.message))
      .then(() => this.props.history.push('/shipping'));
  }

  render() {
    const {name, email, password} = this.state;
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
    this.state = {
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipcode: ''
    };
    this.handleStreet1Change = this.handleStreet1Change.bind(this);
    this.handleStreet2Change = this.handleStreet2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStreet1Change(e) {
    const street1 = e.target.value;
    this.setState({street1});
  }

  handleStreet2Change(e) {
    const street2 = e.target.value;
    this.setState({street2});
  }

  handleCityChange(e) {
    const city = e.target.value;
    this.setState({city});
  }

  handleStateChange(e) {
    const state = e.target.value;
    this.setState({state});
  }

  handleZipcodeChange(e) {
    const zipcode = e.target.value;
    this.setState({zipcode});
  }

  handleShipping() {
    const {street1, street2, city, state, zipcode} = this.state;
    const payload = {street1, street2, city, zipcode};

    apis.addShipping(payload)
      .then((r) => r.json())
      .then((r) => console.log(r.message))
      .then(() => this.props.history.push('/billing'));
  }
  
  render() {
    return (
      <div> 
        <h1>Shipping Information</h1>
        <input type='text' placeholder='Street' onChange={this.handleStreet1Change}></input>
        <input type='text' placeholder='Apt/Unit #' onChange={this.handleStreet2Change}></input>
        <input type='text' placeholder='City' onChange={this.handleCityChange}></input>
        <input type='text' placeholder='State' onChange={this.handleStateChange}></input>
        <input type='text' placeholder='Zip Code' onChange={this.handleZipcodeChange}></input>
        <Link to="/billing">
          <button onClick={this.handleShipping}>Next</button>
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
