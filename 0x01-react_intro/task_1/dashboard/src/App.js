import holberton_logo from './holberton_logo.jpg';
import './App.css';
import './Notifications.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </div>
    </div>
  );
}

export default App;
