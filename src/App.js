import React from "react" 
import "./App.css" ;
import Nav from "./component/nav/nav";
import "./style.css";
import profile from "./image/user.jpg";
import email from "./image/inbox.jpg";
import password from "./image/pass.jpg";
function App() {
return(
  <>
  <Nav></Nav>
  <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
        </div>
            <div>
                <h1>Login Page</h1>
                <div>
                  <img src={email} alt="email" className="email"/>
                  <input type="text" placeholder="UserName" className="name"/>
                </div>
                <div className= "second-input">
                    <img src={password} alt="password" className="email"/>
                    <input type="text" placeholder="Password" className="name"/>
                </div>
                  <div className="login-button">
                      <button>Login</button>
                  </div>
                  <p className="link">
                    <a href="#">Forget password ?</a> or<a href="#">Sign Up</a>
                  </p>
            </div>
        </div>
      </div>
  </div>
  </>);
}
export default App;













