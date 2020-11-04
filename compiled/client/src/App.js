var Router = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route;
var Link = window.ReactRouterDOM.Link;
var Prompt = window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;
var browserHistory = window.ReactRouter.browserHistory;

var api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

const createAccount = payload => api.post(`/account`, payload);
const addShipping = payload => api.post(`/shipping`, payload);
const addBilling = payload => api.post(`/billing`, payload);

const apis = { createAccount, addShipping, addBilling };

class App extends React.Component {
  render() {
    return React.createElement(
      Router,
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/' },
              'Home'
            )
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: '/', component: Home }),
          React.createElement(Route, { path: '/account', component: Account }),
          React.createElement(Route, { path: '/shipping', component: Shipping }),
          React.createElement(Route, { path: '/billing', component: Billing }),
          React.createElement(Route, { path: '/confirmation', component: Confirmation })
        )
      )
    );
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Checkout'
      ),
      React.createElement(
        'button',
        { onClick: this.handleCheckout },
        'Checkout'
      )
    );
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
    this.setState({ name });
  }

  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  handlePasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  handleAccountCreation() {
    const { name, email, password } = this.state;
    const payload = { name, email, password };

    apis.createAccount(payload).then(r => console.log(r.data.message)).then(() => this.props.history.push('/shipping'));
  }

  render() {
    const { name, email, password } = this.state;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Make an account!'
      ),
      React.createElement(
        'label',
        null,
        'Name'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Name', value: name, onChange: this.handleNameChange }),
      React.createElement(
        'label',
        null,
        'Email'
      ),
      React.createElement('input', { type: 'email', placeholder: 'Email', value: email, onChange: this.handleEmailChange }),
      React.createElement(
        'label',
        null,
        'Password'
      ),
      React.createElement('input', { type: 'password', placeholder: 'Password', value: password, onChange: this.handlePasswordChange }),
      React.createElement(
        'button',
        { type: 'submit', onClick: this.handleAccountCreation },
        'Next'
      )
    );
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
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
  }

  handleStreet1Change(e) {
    const street1 = e.target.value;
    this.setState({ street1 });
  }

  handleStreet2Change(e) {
    const street2 = e.target.value;
    this.setState({ street2 });
  }

  handleCityChange(e) {
    const city = e.target.value;
    this.setState({ city });
  }

  handleStateChange(e) {
    const state = e.target.value;
    this.setState({ state });
  }

  handleZipcodeChange(e) {
    const zipcode = e.target.value;
    this.setState({ zipcode });
  }

  handleShipping() {
    const { street1, street2, city, state, zipcode } = this.state;
    const payload = { street1, street2, city, zipcode };

    apis.addShipping(payload).then(r => console.log(r.data.message)).then(() => this.props.history.push('/billing'));
  }

  render() {
    const { street1, street2, city, state, zipcode } = this.state;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Shipping Information'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Street', value: street1, onChange: this.handleStreet1Change }),
      React.createElement('input', { type: 'text', placeholder: 'Apt/Unit #', value: street2, onChange: this.handleStreet2Change }),
      React.createElement('input', { type: 'text', placeholder: 'City', value: city, onChange: this.handleCityChange }),
      React.createElement('input', { type: 'text', placeholder: 'State', value: state, onChange: this.handleStateChange }),
      React.createElement('input', { type: 'text', placeholder: 'Zip Code', value: zipcode, onChange: this.handleZipcodeChange }),
      React.createElement(
        Link,
        { to: '/billing' },
        React.createElement(
          'button',
          { onClick: this.handleShipping },
          'Next'
        )
      )
    );
  }
}

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      zipcode: ''
    };
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleExpirationChange = this.handleExpirationChange.bind(this);
    this.handleCVVChange = this.handleCVVChange.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleBilling = this.handleBilling.bind(this);
  }

  handleCardChange(e) {
    const cardNumber = e.target.value;
    this.setState({ cardNumber });
  }

  handleExpirationChange(e) {
    const expirationDate = e.target.value;
    this.setState({ expirationDate });
  }

  handleCVVChange(e) {
    const cvv = e.target.value;
    this.setState({ cvv });
  }

  handleZipcodeChange(e) {
    const zipcode = e.target.value;
    this.setState({ zipcode });
  }

  handleBilling() {
    const { cardNumber, expirationDate, cvv, billingZipcode } = this.state;
    const payload = { cardNumber, expirationDate, cvv, zipcode };

    apis.addBilling(payload).then(r => console.log(r.data.message)).then(() => this.props.history.push('/confirmation'));
  }

  render() {
    const { cardNumber, expirationDate, cvv, zipcode } = this.state;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Billing Information'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Card Number', value: cardNumber, onChange: this.handleCardChange }),
      React.createElement('input', { type: 'text', placeholder: 'Expiration Date', value: expirationDate, onChange: this.handleExpirationChange }),
      React.createElement('input', { type: 'password', placeholder: 'CVV', value: cvv, onChange: this.handleCVVChange }),
      React.createElement('input', { type: 'text', placeholder: 'Zip Code', value: billingZipcode, onChange: this.handleZipcodeChange }),
      React.createElement(
        'button',
        { onClick: this.handleBilling },
        'Next'
      )
    );
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Order Confirmation'
      ),
      React.createElement(
        Link,
        { to: '/' },
        React.createElement(
          'button',
          null,
          'Place Order'
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVBY2NvdW50IiwicGF5bG9hZCIsInBvc3QiLCJhZGRTaGlwcGluZyIsImFkZEJpbGxpbmciLCJhcGlzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJIb21lIiwiQWNjb3VudCIsIlNoaXBwaW5nIiwiQmlsbGluZyIsIkNvbmZpcm1hdGlvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVDaGVja291dCIsImJpbmQiLCJoaXN0b3J5IiwicHVzaCIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZUFjY291bnRDcmVhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGhlbiIsInIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJzdHJlZXQxIiwic3RyZWV0MiIsImNpdHkiLCJ6aXBjb2RlIiwiaGFuZGxlU3RyZWV0MUNoYW5nZSIsImhhbmRsZVN0cmVldDJDaGFuZ2UiLCJoYW5kbGVDaXR5Q2hhbmdlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJoYW5kbGVaaXBjb2RlQ2hhbmdlIiwiaGFuZGxlU2hpcHBpbmciLCJjYXJkTnVtYmVyIiwiZXhwaXJhdGlvbkRhdGUiLCJjdnYiLCJoYW5kbGVDYXJkQ2hhbmdlIiwiaGFuZGxlRXhwaXJhdGlvbkNoYW5nZSIsImhhbmRsZUNWVkNoYW5nZSIsImhhbmRsZUJpbGxpbmciLCJiaWxsaW5nWmlwY29kZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBU0MsT0FBT0MsY0FBUCxDQUFzQkMsYUFBbkM7QUFDQSxJQUFJQyxRQUFTSCxPQUFPQyxjQUFQLENBQXNCRSxLQUFuQztBQUNBLElBQUlDLE9BQVFKLE9BQU9DLGNBQVAsQ0FBc0JHLElBQWxDO0FBQ0EsSUFBSUMsU0FBVUwsT0FBT0MsY0FBUCxDQUFzQkksTUFBcEM7QUFDQSxJQUFJQyxTQUFTTixPQUFPQyxjQUFQLENBQXNCSyxNQUFuQztBQUNBLElBQUlDLFdBQVdQLE9BQU9DLGNBQVAsQ0FBc0JNLFFBQXJDO0FBQ0EsSUFBSUMsaUJBQWlCUixPQUFPUyxXQUFQLENBQW1CRCxjQUF4Qzs7QUFFQSxJQUFJRSxNQUFNQyxNQUFNQyxNQUFOLENBQWE7QUFDbkJDLFdBQVM7QUFEVSxDQUFiLENBQVY7O0FBSUEsTUFBTUMsZ0JBQWdCQyxXQUFXTCxJQUFJTSxJQUFKLENBQVUsVUFBVixFQUFxQkQsT0FBckIsQ0FBakM7QUFDQSxNQUFNRSxjQUFjRixXQUFXTCxJQUFJTSxJQUFKLENBQVUsV0FBVixFQUFzQkQsT0FBdEIsQ0FBL0I7QUFDQSxNQUFNRyxhQUFhSCxXQUFXTCxJQUFJTSxJQUFKLENBQVUsVUFBVixFQUFxQkQsT0FBckIsQ0FBOUI7O0FBRUEsTUFBTUksT0FBTyxFQUFDTCxhQUFELEVBQWdCRyxXQUFoQixFQUE2QkMsVUFBN0IsRUFBYjs7QUFFQSxNQUFNRSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsV0FBUztBQUNQLFdBQ0U7QUFBQyxZQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGtCQUFEO0FBQUEsZ0JBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQTtBQURGO0FBREYsU0FERjtBQU1FLHVDQU5GO0FBT0U7QUFBQyxnQkFBRDtBQUFBO0FB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VCxtQkFBaEYsR0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLFNBQVMsS0FBS1EsYUFBdEI7QUFBQTtBQUFBO0FBTkYsS0FERjtBQVVEO0FBekRtQzs7QUE0RHRDLE1BQU16QyxZQUFOLFNBQTJCUCxNQUFNQyxTQUFqQyxDQUEyQztBQUN6Q08sY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0Q7O0FBRURQLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsWUFBRDtBQUFBLFVBQU0sSUFBRyxHQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBRkYsS0FERjtBQVFEO0FBZHdDOztBQWlCM0NnRCxTQUFTaEQsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCaUQsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gd2luZG93LlJlYWN0Um91dGVyRE9NLkJyb3dzZXJSb3V0ZXI7XG52YXIgUm91dGUgPSAgd2luZG93LlJlYWN0Um91dGVyRE9NLlJvdXRlO1xudmFyIExpbmsgPSAgd2luZG93LlJlYWN0Um91dGVyRE9NLkxpbms7XG52YXIgUHJvbXB0ID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Qcm9tcHQ7XG52YXIgU3dpdGNoID0gd2luZG93LlJlYWN0Um91dGVyRE9NLlN3aXRjaDtcbnZhciBSZWRpcmVjdCA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5SZWRpcmVjdDtcbnZhciBicm93c2VySGlzdG9yeSA9IHdpbmRvdy5SZWFjdFJvdXRlci5icm93c2VySGlzdG9yeTtcblxudmFyIGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG59KTtcblxuY29uc3QgY3JlYXRlQWNjb3VudCA9IHBheWxvYWQgPT4gYXBpLnBvc3QoYC9hY2NvdW50YCwgcGF5bG9hZCk7XG5jb25zdCBhZGRTaGlwcGluZyA9IHBheWxvYWQgPT4gYXBpLnBvc3QoYC9zaGlwcGluZ2AsIHBheWxvYWQpO1xuY29uc3QgYWRkQmlsbGluZyA9IHBheWxvYWQgPT4gYXBpLnBvc3QoYC9iaWxsaW5nYCwgcGF5bG9hZCk7XG5cbmNvbnN0IGFwaXMgPSB7Y3JlYXRlQWNjb3VudCwgYWRkU2hpcHBpbmcsIGFkZEJpbGxpbmd9O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hY2NvdW50JyBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3NoaXBwaW5nJyBjb21wb25lbnQ9e1NoaXBwaW5nfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9iaWxsaW5nJyBjb21wb25lbnQ9e0JpbGxpbmd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2NvbmZpcm1hdGlvbicgY29tcG9uZW50PXtDb25maXJtYXRpb259IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrb3V0ID0gdGhpcy5oYW5kbGVDaGVja291dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tvdXQoKSB7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9hY2NvdW50Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICkgXG4gIH0gXG59XG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTmFtZUNoYW5nZSA9IHRoaXMuaGFuZGxlTmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFjY291bnRDcmVhdGlvbiA9IHRoaXMuaGFuZGxlQWNjb3VudENyZWF0aW9uLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lfSk7XG4gIH1cblxuICBoYW5kbGVFbWFpbENoYW5nZShlKSB7XG4gICAgY29uc3QgZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmR9KTtcbiAgfVxuXG4gIGhhbmRsZUFjY291bnRDcmVhdGlvbigpIHtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9O1xuXG4gICAgYXBpcy5jcmVhdGVBY2NvdW50KHBheWxvYWQpXG4gICAgICAudGhlbigocikgPT4gY29uc29sZS5sb2coci5kYXRhLm1lc3NhZ2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zaGlwcGluZycpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+TWFrZSBhbiBhY2NvdW50ITwvaDE+XG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdOYW1lJyB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17dGhpcy5oYW5kbGVBY2NvdW50Q3JlYXRpb259Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTaGlwcGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHJlZXQxOiAnJyxcbiAgICAgIHN0cmVldDI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlID0gdGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlID0gdGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaXR5Q2hhbmdlID0gdGhpcy5oYW5kbGVDaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSA9IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVppcGNvZGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVppcGNvZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNoaXBwaW5nID0gdGhpcy5oYW5kbGVTaGlwcGluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3RyZWV0MUNoYW5nZShlKSB7XG4gICAgY29uc3Qgc3RyZWV0MSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0cmVldDF9KTtcbiAgfVxuXG4gIGhhbmRsZVN0cmVldDJDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN0cmVldDIgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHJlZXQyfSk7XG4gIH1cblxuICBoYW5kbGVDaXR5Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2l0eX0pO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN0YXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdGV9KTtcbiAgfVxuXG4gIGhhbmRsZVppcGNvZGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHppcGNvZGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHt6aXBjb2RlfSk7XG4gIH1cblxuICBoYW5kbGVTaGlwcGluZygpIHtcbiAgICBjb25zdCB7c3RyZWV0MSwgc3RyZWV0MiwgY2l0eSwgc3RhdGUsIHppcGNvZGV9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge3N0cmVldDEsIHN0cmVldDIsIGNpdHksIHppcGNvZGV9O1xuXG4gICAgYXBpcy5hZGRTaGlwcGluZyhwYXlsb2FkKVxuICAgICAgLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIuZGF0YS5tZXNzYWdlKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvYmlsbGluZycpKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzdHJlZXQxLCBzdHJlZXQyLCBjaXR5LCBzdGF0ZSwgemlwY29kZX0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTdHJlZXQnIHZhbHVlPXtzdHJlZXQxfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0FwdC9Vbml0ICMnIHZhbHVlPXtzdHJlZXQyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NpdHknIHZhbHVlPXtjaXR5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaXR5Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1N0YXRlJyB2YWx1ZT17c3RhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJyB2YWx1ZT17emlwY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmlwY29kZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvYmlsbGluZ1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTaGlwcGluZ30+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQmlsbGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICAgIGV4cGlyYXRpb25EYXRlOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICB6aXBjb2RlOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDYXJkQ2hhbmdlID0gdGhpcy5oYW5kbGVDYXJkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDVlZDaGFuZ2UgPSB0aGlzLmhhbmRsZUNWVkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlWmlwY29kZUNoYW5nZSA9IHRoaXMuaGFuZGxlWmlwY29kZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQmlsbGluZyA9IHRoaXMuaGFuZGxlQmlsbGluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2FyZENoYW5nZShlKSB7XG4gICAgY29uc3QgY2FyZE51bWJlciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhcmROdW1iZXJ9KTtcbiAgfVxuXG4gIGhhbmRsZUV4cGlyYXRpb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXhwaXJhdGlvbkRhdGV9KTtcbiAgfVxuXG4gIGhhbmRsZUNWVkNoYW5nZShlKSB7XG4gICAgY29uc3QgY3Z2ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3Z2fSk7XG4gIH1cblxuICBoYW5kbGVaaXBjb2RlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB6aXBjb2RlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7emlwY29kZX0pO1xuICB9XG5cbiAgaGFuZGxlQmlsbGluZygpIHtcbiAgICBjb25zdCB7Y2FyZE51bWJlciwgZXhwaXJhdGlvbkRhdGUsIGN2diwgYmlsbGluZ1ppcGNvZGV9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge2NhcmROdW1iZXIsIGV4cGlyYXRpb25EYXRlLCBjdnYsIHppcGNvZGV9O1xuXG4gICAgYXBpcy5hZGRCaWxsaW5nKHBheWxvYWQpXG4gICAgICAudGhlbigocikgPT4gY29uc29sZS5sb2coci5kYXRhLm1lc3NhZ2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jb25maXJtYXRpb24nKSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2FyZE51bWJlciwgZXhwaXJhdGlvbkRhdGUsIGN2diwgemlwY29kZX0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPkJpbGxpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NhcmQgTnVtYmVyJyB2YWx1ZT17Y2FyZE51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2FyZENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFeHBpcmF0aW9uIERhdGUnIHZhbHVlPXtleHBpcmF0aW9uRGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXhwaXJhdGlvbkNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nQ1ZWJyB2YWx1ZT17Y3Z2fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDVlZDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnIHZhbHVlPXtiaWxsaW5nWmlwY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWmlwY29kZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJpbGxpbmd9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPk9yZGVyIENvbmZpcm1hdGlvbjwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24+UGxhY2UgT3JkZXI8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19