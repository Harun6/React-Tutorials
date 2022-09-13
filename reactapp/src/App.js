
import Navbar from "./Component/Navbar";
import User from "./Component/User";
import './App.css';


function App() {
 // const test = 34;
 // const isAuth = true;
  return (
    <div className="container">
      {/*<h1 className="naber">Hello React</h1>
      <label htmlFor =""></label>
      <h4>{test}</h4>              {/*JavaScript is written in square brackets.*/}
      {/*<h4>{1 + 1}</h4>
      <h4>{"harun".toLocaleUpperCase()}</h4>
      <div>
        {
          isAuth ? <p> User Registered</p>
          : null
        }
      </div>*/}
      {/* App Component
      <h4>App Component</h4>
      <User/>*/}
      <Navbar title ="User App "/>
      <hr/>   
      <User
      name = "Harun Akgül"
      department = "Bilişim"
      salary = "5000"
      />   

      <User
      name = "Mehmet Yıldız"
      department = "Bilişim"
      salary = "6000"
      /> 
    </div>
  );
}

export default App;
