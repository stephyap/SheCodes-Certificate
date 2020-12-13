import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kuala Lumpur" />
        <footer>
          Coded by{" "}
          <a href="https://stephyap.github.io/portfolio/">Chiu Feng Yap</a> and{" "}
          <a href="https://github.com/stephyap/Shecodes_React_FinalProject">
            open-sourced in Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
