import logo from './DelivRy_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button id="homeBtn">Login</button>
        <br></br>
        <button id="homeBtn">Create Account</button>
      </header>   
    </div>
  );
}

export default App;
