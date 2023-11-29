import "./App.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="content__main">
          <h1 className="word fancy">
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">c</span>
            <span className="letter">é</span>
          </h1>
          <p>NEW YORK</p>
        </div>
        <Typewriter
          words={["coming soon..."]}
          loop={2}
          cursor
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
}

export default App;
