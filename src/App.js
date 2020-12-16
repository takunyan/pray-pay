import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";
import 'firebase/functions';

function App() {
  function testCF() {
    const testFunc = firebase.functions().httpsCallable('test');
    const messageText = "cc16";
    testFunc({ text: messageText }).then(function (result) {
      // Read result of the Cloud Function.
      console.log(result.data);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
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
      <button onClick={testCF}>
        Test cloud functions
    </button>
    </div>
  );
}

export default App;
