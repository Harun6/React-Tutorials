
import './App.css';

function App() {
  const test = 34;
  const isAuth = true;
  return (
    <div className="App">
      <h1 className="naber">Hello React</h1>
      <label htmlFor =""></label>
      <h4>{test}</h4>              {/*JavaScript is written in square brackets.*/}
      <h4>{1 + 1}</h4>
      <h4>{"harun".toLocaleUpperCase()}</h4>
      <div>
        {
          isAuth ? <p> User Registered</p>
          : null
        }
      </div>
    </div>
  );
}

export default App;
