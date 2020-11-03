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

const apis = { createAccount };

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
        Link,
        { to: '/account' },
        React.createElement(
          'button',
          null,
          'Checkout'
        )
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
      React.createElement('input', { type: 'text', placeholder: 'Street' }),
      React.createElement('input', { type: 'text', placeholder: 'Apt/Unit #' }),
      React.createElement('input', { type: 'text', placeholder: 'City' }),
      React.createElement('input', { type: 'text', placeholder: 'State' }),
      React.createElement('input', { type: 'text', placeholder: 'Zip Code' }),
      React.createElement(
        Link,
        { to: '/billing' },
        React.createElement(
          'button',
          null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVBY2NvdW50IiwicGF5bG9hZCIsInBvc3QiLCJhcGlzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJIb21lIiwiQWNjb3VudCIsIlNoaXBwaW5nIiwiQmlsbGluZyIsIkNvbmZpcm1hdGlvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlTmFtZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlQWNjb3VudENyZWF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aGVuIiwiciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImhpc3RvcnkiLCJwdXNoIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFTQyxPQUFPQyxjQUFQLENBQXNCQyxhQUFuQztBQUNBLElBQUlDLFFBQVNILE9BQU9DLGNBQVAsQ0FBc0JFLEtBQW5DO0FBQ0EsSUFBSUMsT0FBUUosT0FBT0MsY0FBUCxDQUFzQkcsSUFBbEM7QUFDQSxJQUFJQyxTQUFVTCxPQUFPQyxjQUFQLENBQXNCSSxNQUFwQztBQUNBLElBQUlDLFNBQVNOLE9BQU9DLGNBQVAsQ0FBc0JLLE1BQW5DO0FBQ0EsSUFBSUMsV0FBV1AsT0FBT0MsY0FBUCxDQUFzQk0sUUFBckM7QUFDQSxJQUFJ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QUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLElBQUcsR0FBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLEtBREY7QUFRRDtBQWR3Qzs7QUFpQjNDNkIsU0FBUzdCLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjhCLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Ccm93c2VyUm91dGVyO1xudmFyIFJvdXRlID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Sb3V0ZTtcbnZhciBMaW5rID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5MaW5rO1xudmFyIFByb21wdCA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUHJvbXB0O1xudmFyIFN3aXRjaCA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Td2l0Y2g7XG52YXIgUmVkaXJlY3QgPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUmVkaXJlY3Q7XG52YXIgYnJvd3Nlckhpc3RvcnkgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3Rvcnk7XG5cbnZhciBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJyxcbn0pXG5cbmNvbnN0IGNyZWF0ZUFjY291bnQgPSBwYXlsb2FkID0+IGFwaS5wb3N0KGAvYWNjb3VudGAsIHBheWxvYWQpXG5cbmNvbnN0IGFwaXMgPSB7Y3JlYXRlQWNjb3VudH1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hY2NvdW50JyBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9zaGlwcGluZycgY29tcG9uZW50PXtTaGlwcGluZ30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2JpbGxpbmcnIGNvbXBvbmVudD17QmlsbGluZ30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2NvbmZpcm1hdGlvbicgY29tcG9uZW50PXtDb25maXJtYXRpb259IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIj5cbiAgICAgICAgICA8YnV0dG9uPkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICkgXG4gIH0gXG59XG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVBY2NvdW50Q3JlYXRpb24gPSB0aGlzLmhhbmRsZUFjY291bnRDcmVhdGlvbi5iaW5kKHRoaXMpXG4gIH1cbiAgXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWV9KVxuICB9XG5cbiAgaGFuZGxlRW1haWxDaGFuZ2UoZSkge1xuICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbH0pXG4gIH1cblxuICBoYW5kbGVQYXNzd29yZENoYW5nZShlKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkfSlcbiAgfVxuXG4gIGhhbmRsZUFjY291bnRDcmVhdGlvbigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHBheWxvYWQgPSB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfVxuXG4gICAgYXBpcy5jcmVhdGVBY2NvdW50KHBheWxvYWQpXG4gICAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAudGhlbigocikgPT4gY29uc29sZS5sb2coci5tZXNzYWdlKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2hpcHBpbmcnKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5NYWtlIGFuIGFjY291bnQhPC9oMT5cbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J05hbWUnIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCcgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXt0aGlzLmhhbmRsZUFjY291bnRDcmVhdGlvbn0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU3RyZWV0Jz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0FwdC9Vbml0ICMnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQ2l0eSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTdGF0ZSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdaaXAgQ29kZSc+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvYmlsbGluZ1wiPlxuICAgICAgICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQmlsbGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQ2FyZCBOdW1iZXInPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nRXhwaXJhdGlvbiBEYXRlJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdDVlYnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnPjwvaW5wdXQ+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NvbmZpcm1hdGlvblwiPlxuICAgICAgICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5PcmRlciBDb25maXJtYXRpb248L2gxPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICA8YnV0dG9uPlBsYWNlIE9yZGVyPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==