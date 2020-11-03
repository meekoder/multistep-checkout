var Router = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route;
var Link = window.ReactRouterDOM.Link;
var Prompt = window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;
var browserHistory = window.ReactRouter.browserHistory;

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
          React.createElement(
            Route,
            { exact: true, path: '/' },
            React.createElement(Home, null)
          ),
          React.createElement(
            Route,
            { path: '/account' },
            React.createElement(Account, null)
          ),
          React.createElement(
            Route,
            { path: '/shipping' },
            React.createElement(Shipping, null)
          ),
          React.createElement(
            Route,
            { path: '/billing' },
            React.createElement(Billing, null)
          ),
          React.createElement(
            Route,
            { path: '/confirmation' },
            React.createElement(Confirmation, null)
          )
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
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Make an account!'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Name' }),
      React.createElement('input', { type: 'email', placeholder: 'Email' }),
      React.createElement('input', { type: 'password', placeholder: 'Password' }),
      React.createElement(
        Link,
        { to: '/shipping' },
        React.createElement(
          'button',
          null,
          'Next'
        )
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
      React.createElement('input', { type: 'text', placeholder: 'Street 1' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiQWNjb3VudCIsIlNoaXBwaW5nIiwiQmlsbGluZyIsIkNvbmZpcm1hdGlvbiIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBU0MsT0FBT0MsY0FBUCxDQUFzQkMsYUFBbkM7QUFDQSxJQUFJQyxRQUFTSCxPQUFPQyxjQUFQLENBQXNCRSxLQUFuQztBQUNBLElBQUlDLE9BQVFKLE9BQU9DLGNBQVAsQ0FBc0JHLElBQWxDO0FBQ0EsSUFBSUMsU0FBVUwsT0FBT0MsY0FBUCxDQUFzQkksTUFBcEM7QUFDQSxJQUFJQyxTQUFTTixPQUFPQyxjQUFQLENBQXNCSyxNQUFuQztBQUNBLElBQUlDLFdBQVdQLE9BQU9DLGNBQVAsQ0FBc0JNLFFBQXJDO0FBQ0EsSUFBSUMsaUJBQWlCUixPQUFPUyxXQUFQLENBQW1CRCxjQUF4Qzs7QUFFQSxNQUFNRSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQzs7QUFFaENDLFdBQVM7QUFDUCxXQUNFO0FBQUMsWUFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxrQkFBRDtBQUFBLGdCQUFNLElBQUcsR0FBVDtBQUFBO0FBQUE7QUFERjtBQURGLFNBREY7QUFNRSx1Q0FORjtBQU9BO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUMsaUJBQUQ7QUFBQSxjQUFPLFdBQVAsRUFBYSxNQUFL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U0FBMkJULE1BQU1DLFNBQWpDLENBQTJDO0FBQ3pDRyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFREgsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxZQUFEO0FBQUEsVUFBTSxJQUFHLEdBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRixLQURGO0FBUUQ7QUFkd0M7O0FBaUIzQ1EsU0FBU1IsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCUyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uQnJvd3NlclJvdXRlcjtcbnZhciBSb3V0ZSA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUm91dGU7XG52YXIgTGluayA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uTGluaztcbnZhciBQcm9tcHQgPSAgd2luZG93LlJlYWN0Um91dGVyRE9NLlByb21wdDtcbnZhciBTd2l0Y2ggPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uU3dpdGNoO1xudmFyIFJlZGlyZWN0ID0gd2luZG93LlJlYWN0Um91dGVyRE9NLlJlZGlyZWN0O1xudmFyIGJyb3dzZXJIaXN0b3J5ID0gd2luZG93LlJlYWN0Um91dGVyLmJyb3dzZXJIaXN0b3J5O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nPlxuICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWNjb3VudCc+XG4gICAgICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9zaGlwcGluZyc+XG4gICAgICAgICAgICA8U2hpcHBpbmcgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYmlsbGluZyc+XG4gICAgICAgICAgICA8QmlsbGluZyAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jb25maXJtYXRpb24nPlxuICAgICAgICAgICAgPENvbmZpcm1hdGlvbiAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCI+XG4gICAgICAgICAgPGJ1dHRvbj5DaGVja291dDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIFxuICB9IFxufVxuXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+TWFrZSBhbiBhY2NvdW50ITwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nTmFtZSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJz48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9zaGlwcGluZ1wiPlxuICAgICAgICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgU2hpcHBpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTdHJlZXQgMSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdBcHQvVW5pdCAjJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NpdHknPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU3RhdGUnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnPjwvaW5wdXQ+XG4gICAgICAgIDxMaW5rIHRvPVwiL2JpbGxpbmdcIj5cbiAgICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEJpbGxpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPkJpbGxpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NhcmQgTnVtYmVyJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0V4cGlyYXRpb24gRGF0ZSc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nQ1ZWJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJz48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9jb25maXJtYXRpb25cIj5cbiAgICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IFxuICAgICAgICA8aDE+T3JkZXIgQ29uZmlybWF0aW9uPC9oMT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgPGJ1dHRvbj5QbGFjZSBPcmRlcjwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=