import React from 'react';
import ReactDOM from 'react-dom';
import Flowers from './Flowers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "flowers" //flowers by default
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value
    });
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={this.handleClick} value="flowers">
                flowers
              </button>
            </li>
            <li>
              <button onClick={this.handleClick} value="trees">
                trees
              </button>
            </li>
            <li>
              <button onClick={this.handleClick} value="cars">
                cars
              </button>
            </li>
          </ul>
        </nav>
        <main>
          {this.state.target === "flowers" && <Flowers />}
          {this.state.target === "trees" && <trees />}
          {this.state.target === "cars" && <cars />}
        </main>
      </div>
    );
  }
}


class Trees extends React.Component {
  render() {
    return (
      <div>
        <h1>Trees</h1>
        <ul>
          <li>Oak</li>
          <li>Maple</li>
          <li>Pine</li>
        </ul>
      </div>
    );
  }
}

class Cars extends React.Component {
  render() {
    return (
      <div>
        <h1>Cars</h1>
        <ul>
          <li>Sedan</li>
          <li>SUV</li>
          <li>Sports Car</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);