import dog from "./dog.PNG";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <img src={dog} className="App-logo img-fluid" alt="logo" />{" "}
          <p className="dictionary-app">Dictionary app</p>
        </div>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/JeyeonLim/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Jeyeon Lim{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
