import "./App.css";

const subject = "React";
function App(props) {
  console.log(props);
  return (
    <>
      <header>
        <h1>Hello, {subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}

export default App;
