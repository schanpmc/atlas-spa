import logo from './logo.svg';
import './App.css';

const App = () => {
  const blogherads = window.blogherads || {};
  blogherads.adq = blogherads.adq || [];
  blogherads.adq.push(function() {
    blogherads.defineSlot('medrec', 'skm-ad-medrec-1').display();
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          id="skm-ad-medrec-1"
        />
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
