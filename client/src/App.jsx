class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ''
    };

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout(comp, e) {
    e.preventDefault();
    console.log(comp)
    console.log('checkout clicked');
    this.setState({render: comp});
  }

  renderSubComp() {
    switch(this.state.render) {
      case 'Account': return <Account />
    }
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <button onClick={this.handleCheckout.bind(this, 'Account')}>Checkout</button>
        {this.renderSubComp()}
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
        <button>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
