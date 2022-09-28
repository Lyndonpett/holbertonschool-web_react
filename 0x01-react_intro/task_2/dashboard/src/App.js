import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
          <label for="password">
            Password:
            <input type="password" id="password" name="password" />
          </label>
          <button>OK</button>
        </form>
      </div>

      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(0)}
        </p>
      </footer>
    </div>
  );
}

export default App;
