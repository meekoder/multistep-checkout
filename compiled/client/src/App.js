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
    console.log(comp);
    console.log('checkout clicked');
    this.setState({ render: comp });
  }

  renderSubComp() {
    switch (this.state.render) {
      case 'Account':
        return React.createElement(Account, null);
    }
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
        { onClick: this.handleCheckout.bind(this, 'Account') },
        'Checkout'
      ),
      this.renderSubComp()
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
        'button',
        null,
        'Next'
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlciIsImhhbmRsZUNoZWNrb3V0IiwiYmluZCIsImNvbXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXJTdWJDb21wIiwiQWNjb3VudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRO0FBREcsS0FBYjs7QUFJQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0Q7O0FBRURELGlCQUFlRSxJQUFmLEVBQXFCQyxDQUFyQixFQUF3QjtBQUN0QkEsTUFBRUMsY0FBRjtBQUNBQyxZQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQUcsWUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLEVBQUNSLFFBQVFHLElBQVQsRUFBZDtBQUNEOztBQUVETSxrQkFBZ0I7QUFDZCxZQUFPLEtBQUtWLEtBQUwsQ0FBV0MsTUFBbEI7QUFDRSxXQUFLLFNBQUw7QUFBZ0IsZUFBTyxvQkFBQyxPQUFELE9BQVA7QUFEbEI7QUFHRDs7QUFFREEsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsU0FBUyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQixTQUEvQixDQUFqQjtBQUFBO0FBQUEsT0FGRjtBQUdHLFdBQUtPLGFBQUw7QUFISCxLQURGO0FBT0Q7QUEvQitCOztBQWtDbEMsTUFBTUMsT0FBTixTQUFzQmYsTUFBTUMsU0FBNUIsQ0FBc0M7QUFDcENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUVEOztBQUVERSxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxNQUEvQixHQUZGO0FBR0UscUNBQU8sTUFBSyxPQUFaLEVBQW9CLGFBQVksT0FBaEMsR0FIRjtBQUlFLHFDQUFPLE1BQUssVUFBWixFQUF1QixhQUFZLFVBQW5DLEdBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsS0FERjtBQVNEO0FBaEJtQzs7QUFtQnRDVyxTQUFTWCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJZLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlbmRlcjogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGVja291dCA9IHRoaXMuaGFuZGxlQ2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrb3V0KGNvbXAsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY29tcClcbiAgICBjb25zb2xlLmxvZygnY2hlY2tvdXQgY2xpY2tlZCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3JlbmRlcjogY29tcH0pO1xuICB9XG5cbiAgcmVuZGVyU3ViQ29tcCgpIHtcbiAgICBzd2l0Y2godGhpcy5zdGF0ZS5yZW5kZXIpIHtcbiAgICAgIGNhc2UgJ0FjY291bnQnOiByZXR1cm4gPEFjY291bnQgLz5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dC5iaW5kKHRoaXMsICdBY2NvdW50Jyl9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgIHt0aGlzLnJlbmRlclN1YkNvbXAoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiBcbiAgICAgICAgPGgxPk1ha2UgYW4gYWNjb3VudCE8L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J05hbWUnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdQYXNzd29yZCc+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=