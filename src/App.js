import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";

function App() {

  const [user, setUser] = useState({});

  function handlecallback(response){
    console.log("Encodede JWT ID token:" + response.credential);
    var userObj = jwt_decode(response.credential);
    console.log("Decoded JWT ID token:" + userObj);
    console.log(userObj);

    setUser(userObj);
    document.getElementById("signInDiv").hidden = true;
  }
  
  function handleSingOut(){
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: "721610298440-ni8ecb4m9ba910642270uvi59ldqbs9i.apps.googleusercontent.com",
      callback: handlecallback
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div className='App'>
      <div id="signInDiv"></div>
      {Object.keys(user).length > 0 &&
        <button onClick={(e) => handleSingOut(e)}>Disable Auto Select</button>
      }
      <img src={user.picture} alt={user.name} /> 
    </div>

  );
}

export default App;