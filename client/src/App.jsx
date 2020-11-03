var Router = window.ReactRouterDOM.BrowserRouter;
var Route =  window.ReactRouterDOM.Route;
var Link =  window.ReactRouterDOM.Link;
var Prompt =  window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;
var browserHistory = window.ReactRouter.browserHistory;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  callAPI() {
    fetch("http://localhost:3000/")
      .then(res => res.text())
      .then(res => this.setState({response: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <hr />
          <p>{this.state.response}</p>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/shipping'>
            <Shipping />
          </Route>
          <Route path='/billing'>
            <Billing />
          </Route>
          <Route path='/confirmation'>
            <Confirmation />
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
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
    super(props);
  }

  render() {
    return (
      <div> 
        <h1>Make an account!</h1>
        <input type='text' placeholder='Name'></input>
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='Password'></input>
        <Link to="/shipping">
          <button>Next</button>
        </Link>
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
        <input type='text' placeholder='Street 1'></input>
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
        <Link to="/home">
          <button>Place Order</button>
        </Link>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
