import logo from './logo.svg';
import './App.css';
import { useBhaSlot } from './useBhaSlot';

function App() {
  useBhaSlot({
    size: 'medrec',
    divid: 'skm-ad-medrec-1',
   });
  return (
    <div className="App">
      <header className="App-header">
        <div
          id="skm-ad-medrec-1"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
