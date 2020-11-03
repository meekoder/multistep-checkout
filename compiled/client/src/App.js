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

const apis = { createAccount, addShipping };

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

    apis.addShipping(payload).then(r => r.json()).then(r => console.log(r.message)).then(() => this.props.history.push('/billing'));
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Shipping Information'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Street', onChange: this.handleStreet1Change }),
      React.createElement('input', { type: 'text', placeholder: 'Apt/Unit #', onChange: this.handleStreet2Change }),
      React.createElement('input', { type: 'text', placeholder: 'City', onChange: this.handleCityChange }),
      React.createElement('input', { type: 'text', placeholder: 'State', onChange: this.handleStateChange }),
      React.createElement('input', { type: 'text', placeholder: 'Zip Code', onChange: this.handleZipcodeChange }),
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
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Billing Information'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Card Number' }),
      React.createElement('input', { type: 'text', placeholder: 'Expiration Date' }),
      React.createElement('input', { type: 'password', placeholder: 'CVV' }),
      React.createElement('input', { type: 'text', placeholder: 'Zip Code' }),
      React.createElement(
        Link,
        { to: '/confirmation' },
        React.createElement(
          'button',
          null,
          'Next'
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVBY2NvdW50IiwicGF5bG9hZCIsInBvc3QiLCJhZGRTaGlwcGluZyIsImFwaXMiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkhvbWUiLCJBY2NvdW50IiwiU2hpcHBpbmciLCJCaWxsaW5nIiwiQ29uZmlybWF0aW9uIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUNoZWNrb3V0IiwiYmluZCIsImhpc3RvcnkiLCJwdXNoIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlQWNjb3VudENyZWF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aGVuIiwiciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsInN0cmVldDEiLCJzdHJlZXQyIiwiY2l0eSIsInppcGNvZGUiLCJoYW5kbGVTdHJlZXQxQ2hhbmdlIiwiaGFuZGxlU3RyZWV0MkNoYW5nZSIsImhhbmRsZUNpdHlDaGFuZ2UiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImhhbmRsZVppcGNvZGVDaGFuZ2UiLCJoYW5kbGVTaGlwcGluZyIsImpzb24iLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVNDLE9BQU9DLGNBQVAsQ0FBc0JDLGFBQW5DO0FBQ0EsSUFBSUMsUUFBU0gs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TUEsS0FBTjtBQUNEOztBQUVEUCxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLElBQUcsR0FBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLEtBREY7QUFRRDtBQWR3Qzs7QUFpQjNDeUMsU0FBU3pDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjBDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Ccm93c2VyUm91dGVyO1xudmFyIFJvdXRlID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Sb3V0ZTtcbnZhciBMaW5rID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5MaW5rO1xudmFyIFByb21wdCA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUHJvbXB0O1xudmFyIFN3aXRjaCA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Td2l0Y2g7XG52YXIgUmVkaXJlY3QgPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUmVkaXJlY3Q7XG52YXIgYnJvd3Nlckhpc3RvcnkgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3Rvcnk7XG5cbnZhciBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xufSk7XG5cbmNvbnN0IGNyZWF0ZUFjY291bnQgPSBwYXlsb2FkID0+IGFwaS5wb3N0KGAvYWNjb3VudGAsIHBheWxvYWQpO1xuY29uc3QgYWRkU2hpcHBpbmcgPSBwYXlsb2FkID0+IGFwaS5wb3N0KGAvc2hpcHBpbmdgLCBwYXlsb2FkKTtcblxuY29uc3QgYXBpcyA9IHtjcmVhdGVBY2NvdW50LCBhZGRTaGlwcGluZ307XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FjY291bnQnIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvc2hpcHBpbmcnIGNvbXBvbmVudD17U2hpcHBpbmd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JpbGxpbmcnIGNvbXBvbmVudD17QmlsbGluZ30gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvY29uZmlybWF0aW9uJyBjb21wb25lbnQ9e0NvbmZpcm1hdGlvbn0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXQgPSB0aGlzLmhhbmRsZUNoZWNrb3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGVja291dCgpIHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2FjY291bnQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNoZWNrb3V0PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKSBcbiAgfSBcbn1cblxuY2xhc3MgQWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQWNjb3VudENyZWF0aW9uID0gdGhpcy5oYW5kbGVBY2NvdW50Q3JlYXRpb24uYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlTmFtZUNoYW5nZShlKSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWV9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsfSk7XG4gIH1cblxuICBoYW5kbGVQYXNzd29yZENoYW5nZShlKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZH0pO1xuICB9XG5cbiAgaGFuZGxlQWNjb3VudENyZWF0aW9uKCkge1xuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZH07XG5cbiAgICBhcGlzLmNyZWF0ZUFjY291bnQocGF5bG9hZClcbiAgICAgIC50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyLmRhdGEubWVzc2FnZSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NoaXBwaW5nJykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5NYWtlIGFuIGFjY291bnQhPC9oMT5cbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J05hbWUnIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCcgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXt0aGlzLmhhbmRsZUFjY291bnRDcmVhdGlvbn0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0cmVldDE6ICcnLFxuICAgICAgc3RyZWV0MjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN0cmVldDFDaGFuZ2UgPSB0aGlzLmhhbmRsZVN0cmVldDFDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN0cmVldDJDaGFuZ2UgPSB0aGlzLmhhbmRsZVN0cmVldDJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNpdHlDaGFuZ2UgPSB0aGlzLmhhbmRsZUNpdHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlID0gdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3RyZWV0MUNoYW5nZShlKSB7XG4gICAgY29uc3Qgc3RyZWV0MSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0cmVldDF9KTtcbiAgfVxuXG4gIGhhbmRsZVN0cmVldDJDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN0cmVldDIgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHJlZXQyfSk7XG4gIH1cblxuICBoYW5kbGVDaXR5Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2l0eX0pO1xuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN0YXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdGV9KTtcbiAgfVxuXG4gIGhhbmRsZVppcGNvZGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHppcGNvZGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHt6aXBjb2RlfSk7XG4gIH1cblxuICBoYW5kbGVTaGlwcGluZygpIHtcbiAgICBjb25zdCB7c3RyZWV0MSwgc3RyZWV0MiwgY2l0eSwgc3RhdGUsIHppcGNvZGV9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge3N0cmVldDEsIHN0cmVldDIsIGNpdHksIHppcGNvZGV9O1xuXG4gICAgYXBpcy5hZGRTaGlwcGluZyhwYXlsb2FkKVxuICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIubWVzc2FnZSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2JpbGxpbmcnKSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU3RyZWV0JyBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0FwdC9Vbml0ICMnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0cmVldDJDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQ2l0eScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0eUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTdGF0ZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVppcGNvZGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxMaW5rIHRvPVwiL2JpbGxpbmdcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hpcHBpbmd9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEJpbGxpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPkJpbGxpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NhcmQgTnVtYmVyJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0V4cGlyYXRpb24gRGF0ZSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nQ1ZWJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJz48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9jb25maXJtYXRpb25cIj5cbiAgICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+T3JkZXIgQ29uZmlybWF0aW9uPC9oMT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgPGJ1dHRvbj5QbGFjZSBPcmRlcjwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=