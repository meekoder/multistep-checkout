var Router = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route;
var Link = window.ReactRouterDOM.Link;
var Prompt = window.ReactRouterDOM.Prompt;
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
    fetch("http://localhost:3000/").then(res => res.text()).then(res => this.setState({ response: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return React.createElement(
      Router,
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/home" },
              "Home"
            )
          )
        ),
        React.createElement("hr", null),
        React.createElement(
          "p",
          null,
          this.state.response
        ),
        React.createElement(
          Switch,
          null,
          React.createElement(
            Route,
            { exact: true, path: "/home" },
            React.createElement(Home, null)
          ),
          React.createElement(
            Route,
            { path: "/account" },
            React.createElement(Account, null)
          ),
          React.createElement(
            Route,
            { path: "/shipping" },
            React.createElement(Shipping, null)
          ),
          React.createElement(
            Route,
            { path: "/billing" },
            React.createElement(Billing, null)
          ),
          React.createElement(
            Route,
            { path: "/confirmation" },
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
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Checkout"
      ),
      React.createElement(
        Link,
        { to: "/account" },
        React.createElement(
          "button",
          null,
          "Checkout"
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
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Make an account!"
      ),
      React.createElement("input", { type: "text", placeholder: "Name" }),
      React.createElement("input", { type: "email", placeholder: "Email" }),
      React.createElement("input", { type: "password", placeholder: "Password" }),
      React.createElement(
        Link,
        { to: "/shipping" },
        React.createElement(
          "button",
          null,
          "Next"
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
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Shipping Information"
      ),
      React.createElement("input", { type: "text", placeholder: "Street 1" }),
      React.createElement("input", { type: "text", placeholder: "Apt/Unit #" }),
      React.createElement("input", { type: "text", placeholder: "City" }),
      React.createElement("input", { type: "text", placeholder: "State" }),
      React.createElement("input", { type: "text", placeholder: "Zip Code" }),
      React.createElement(
        Link,
        { to: "/billing" },
        React.createElement(
          "button",
          null,
          "Next"
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
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Billing Information"
      ),
      React.createElement("input", { type: "text", placeholder: "Card Number" }),
      React.createElement("input", { type: "text", placeholder: "Expiration Date" }),
      React.createElement("input", { type: "password", placeholder: "CVV" }),
      React.createElement("input", { type: "text", placeholder: "Zip Code" }),
      React.createElement(
        Link,
        { to: "/confirmation" },
        React.createElement(
          "button",
          null,
          "Next"
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
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Order Confirmation"
      ),
      React.createElement(
        Link,
        { to: "/home" },
        React.createElement(
          "button",
          null,
          "Place Order"
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIkxpbmsiLCJQcm9tcHQiLCJTd2l0Y2giLCJSZWRpcmVjdCIsImJyb3dzZXJIaXN0b3J5IiwiUmVhY3RSb3V0ZXIiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlc3BvbnNlIiwiY2FsbEFQSSIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsInJlbmRlciIsIkhvbWUiLCJBY2NvdW50IiwiU2hpcHBpbmciLCJCaWxsaW5nIiwiQ29uZmlybWF0aW9uIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFTQyxPQUFPQyxjQUFQLENBQXNCQyxhQUFuQztBQUNBLElBQUlDLFFBQVNILE9BQU9DLGNBQVAsQ0FBc0JFLEtBQW5DO0FBQ0EsSUFBSUMsT0FBUUosT0FBT0MsY0FBUCxDQUFzQkcsSUFBbEM7QUFDQSxJQUFJQyxTQUFVTCxPQUFPQyxjQUFQLENBQXNCSSxNQUFwQztBQUNBLElBQUlDLFNBQVNOLE9BQU9DLGNBQVAsQ0FBc0JLLE1BQW5DO0FBQ0EsSUFBSUMsV0FBV1AsT0FBT0MsY0FBUCxDQUFzQk0sUUFBckM7QUFDQSxJQUFJQyxpQkFBaUJSLE9BQU9TLFdBQVAsQ0FBbUJELGNBQXhDOztBQUVBLE1BQU1FLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLQUFiO0FBR0Q7O0FBRURDLFlBQVU7QUFDUkMsVUFBTSx3QkFBTixFQUNHQyxJQURI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LFNBQTVCLENBQXNDO0FBQ3BDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRFUsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksYUFBL0IsR0FGRjtBQUdFLHFDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGlCQUEvQixHQUhGO0FBSUUscUNBQU8sTUFBSyxVQUFaLEVBQXVCLGFBQVksS0FBbkMsR0FKRjtBQUtFLHFDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CLEdBTEY7QUFNRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLElBQUcsZUFBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQU5GLEtBREY7QUFZRDtBQWxCbUM7O0FBcUJ0QyxNQUFNSyxZQUFOLFNBQTJCbEIsTUFBTUMsU0FBakMsQ0FBMkM7QUFDekNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEVSxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLElBQUcsT0FBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLEtBREY7QUFRRDtBQWR3Qzs7QUFpQjNDTSxTQUFTTixNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJPLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Ccm93c2VyUm91dGVyO1xudmFyIFJvdXRlID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Sb3V0ZTtcbnZhciBMaW5rID0gIHdpbmRvdy5SZWFjdFJvdXRlckRPTS5MaW5rO1xudmFyIFByb21wdCA9ICB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUHJvbXB0O1xudmFyIFN3aXRjaCA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Td2l0Y2g7XG52YXIgUmVkaXJlY3QgPSB3aW5kb3cuUmVhY3RSb3V0ZXJET00uUmVkaXJlY3Q7XG52YXIgYnJvd3Nlckhpc3RvcnkgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3Rvcnk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXNwb25zZTogJydcbiAgICB9O1xuICB9XG5cbiAgY2FsbEFQSSgpIHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoe3Jlc3BvbnNlOiByZXN9KSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jYWxsQVBJKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXNwb25zZX08L3A+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9ob21lJz5cbiAgICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2FjY291bnQnPlxuICAgICAgICAgICAgPEFjY291bnQgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvc2hpcHBpbmcnPlxuICAgICAgICAgICAgPFNoaXBwaW5nIC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2JpbGxpbmcnPlxuICAgICAgICAgICAgPEJpbGxpbmcgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvY29uZmlybWF0aW9uJz5cbiAgICAgICAgICAgIDxDb25maXJtYXRpb24gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNoZWNrb3V0PC9oMT5cbiAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudFwiPlxuICAgICAgICAgIDxidXR0b24+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKSBcbiAgfSBcbn1cblxuY2xhc3MgQWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPk1ha2UgYW4gYWNjb3VudCE8L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J05hbWUnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdQYXNzd29yZCc+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvc2hpcHBpbmdcIj5cbiAgICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU3RyZWV0IDEnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQXB0L1VuaXQgIyc+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDaXR5Jz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1N0YXRlJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJz48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9iaWxsaW5nXCI+XG4gICAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBCaWxsaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gXG4gICAgICAgIDxoMT5CaWxsaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDYXJkIE51bWJlcic+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFeHBpcmF0aW9uIERhdGUnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J0NWVic+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdaaXAgQ29kZSc+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvY29uZmlybWF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPk9yZGVyIENvbmZpcm1hdGlvbjwvaDE+XG4gICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIj5cbiAgICAgICAgICA8YnV0dG9uPlBsYWNlIE9yZGVyPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==