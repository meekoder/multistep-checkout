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

    apis.createAccount(payload).then(r => r.json()).then(r => console.log(r.message)).then(() => this.props.history.push('/shipping'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVBY2NvdW50IiwicGF5bG9hZCIsInBvc3QiLCJhZGRTaGlwcGluZyIsImFwaXMiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkhvbWUiLCJBY2NvdW50IiwiU2hpcHBpbmciLCJCaWxsaW5nIiwiQ29uZmlybWF0aW9uIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUNoZWNrb3V0IiwiYmluZCIsImhpc3RvcnkiLCJwdXNoIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlQWNjb3VudENyZWF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aGVuIiwiciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInN0cmVldDEiLCJzdHJlZXQyIiwiY2l0eSIsInppcGNvZGUiLCJoYW5kbGVTdHJlZXQxQ2hhbmdlIiwiaGFuZGxlU3RyZWV0MkNoYW5nZSIsImhhbmRsZUNpdHlDaGFuZ2UiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImhhbmRsZVppcGNvZGVDaGFuZ2UiLCJoYW5kbGVTaGlwcGluZyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBU0MsT0FBT0MsY0FBUCxDQUFzQkMsYUFBbkM7QUFDQSxJQUFJQyxRQUFTSCxPQUFPQyxj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QVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEUCxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLElBQUcsR0FBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLEtBREY7QUFRRDtBQWR3Qzs7QUFpQjNDd0MsU0FBU3hDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QnlDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Ccm93c2VyUm91dGVyO1xudmFyIFJvdXRlID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Sb3V0ZTtcbnZhciBMaW5rID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5MaW5rO1xudmFyIFByb21wdCA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUHJvbXB0O1xudmFyIFN3aXRjaCA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Td2l0Y2g7XG52YXIgUmVkaXJlY3QgPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUmVkaXJlY3Q7XG52YXIgYnJvd3Nlckhpc3RvcnkgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3Rvcnk7XG5cbnZhciBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xufSk7XG5cbmNvbnN0IGNyZWF0ZUFjY291bnQgPSBwYXlsb2FkID0+IGFwaS5wb3N0KGAvYWNjb3VudGAsIHBheWxvYWQpO1xuY29uc3QgYWRkU2hpcHBpbmcgPSBwYXlsb2FkID0+IGFwaS5wb3N0KGAvc2hpcHBpbmdgLCBwYXlsb2FkKTtcblxuY29uc3QgYXBpcyA9IHtjcmVhdGVBY2NvdW50LCBhZGRTaGlwcGluZ307XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FjY291bnQnIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvc2hpcHBpbmcnIGNvbXBvbmVudD17U2hpcHBpbmd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JpbGxpbmcnIGNvbXBvbmVudD17QmlsbGluZ30gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvY29uZmlybWF0aW9uJyBjb21wb25lbnQ9e0NvbmZpcm1hdGlvbn0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXQgPSB0aGlzLmhhbmRsZUNoZWNrb3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGVja291dCgpIHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2FjY291bnQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNoZWNrb3V0PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKSBcbiAgfSBcbn1cblxuY2xhc3MgQWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQWNjb3VudENyZWF0aW9uID0gdGhpcy5oYW5kbGVBY2NvdW50Q3JlYXRpb24uYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlTmFtZUNoYW5nZShlKSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWV9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsfSk7XG4gIH1cblxuICBoYW5kbGVQYXNzd29yZENoYW5nZShlKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZH0pO1xuICB9XG5cbiAgaGFuZGxlQWNjb3VudENyZWF0aW9uKCkge1xuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZH07XG5cbiAgICBhcGlzLmNyZWF0ZUFjY291bnQocGF5bG9hZClcbiAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyLm1lc3NhZ2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zaGlwcGluZycpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+TWFrZSBhbiBhY2NvdW50ITwvaDE+XG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdOYW1lJyB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17dGhpcy5oYW5kbGVBY2NvdW50Q3JlYXRpb259Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTaGlwcGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHJlZXQxOiAnJyxcbiAgICAgIHN0cmVldDI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlID0gdGhpcy5oYW5kbGVTdHJlZXQxQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlID0gdGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaXR5Q2hhbmdlID0gdGhpcy5oYW5kbGVDaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdGF0ZUNoYW5nZSA9IHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN0cmVldDFDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN0cmVldDEgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHJlZXQxfSk7XG4gIH1cblxuICBoYW5kbGVTdHJlZXQyQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBzdHJlZXQyID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RyZWV0Mn0pO1xuICB9XG5cbiAgaGFuZGxlQ2l0eUNoYW5nZShlKSB7XG4gICAgY29uc3QgY2l0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NpdHl9KTtcbiAgfVxuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlfSk7XG4gIH1cblxuICBoYW5kbGVaaXBjb2RlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB6aXBjb2RlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7emlwY29kZX0pO1xuICB9XG5cbiAgaGFuZGxlU2hpcHBpbmcoKSB7XG4gICAgY29uc3Qge3N0cmVldDEsIHN0cmVldDIsIGNpdHksIHN0YXRlLCB6aXBjb2RlfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtzdHJlZXQxLCBzdHJlZXQyLCBjaXR5LCB6aXBjb2RlfTtcblxuICAgIGFwaXMuYWRkU2hpcHBpbmcocGF5bG9hZClcbiAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyLm1lc3NhZ2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9iaWxsaW5nJykpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1N0cmVldCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RyZWV0MUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdBcHQvVW5pdCAjJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdHJlZXQyQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NpdHknIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNpdHlDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU3RhdGUnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVaaXBjb2RlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9iaWxsaW5nXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNoaXBwaW5nfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBCaWxsaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5CaWxsaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDYXJkIE51bWJlcic+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFeHBpcmF0aW9uIERhdGUnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J0NWVic+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdaaXAgQ29kZSc+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvY29uZmlybWF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPk9yZGVyIENvbmZpcm1hdGlvbjwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24+UGxhY2UgT3JkZXI8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19