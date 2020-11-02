class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <button>Checkout</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
