import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import Header from './components/header';
import Footer from './components/Footer';
// import { BrowserRouter } from 'react-router-dom';
// import { Routes } from './Routes';


function App() {

  const [user, setUser] = useState({});

  function handlecallback(response){
    console.log("Encodede JWT ID token:" + response.credential);
    var userObj = jwt_decode(response.credential);
    console.log("Decoded JWT ID token:" + userObj);
    console.log(userObj.email);

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
    google.accounts.id.prompt();
  }, []);

  return (
 
    <BrowserRouter>
      <Header />
      {/* <Routes/> */}
      <div id="signInDiv"></div>
      {Object.keys(user).length > 0 &&
        <button onClick={(e) => handleSingOut(e)}>Quero Sair</button>
      }
      <img src={user.picture} alt={user.name} />
      <Footer/> 
    </BrowserRouter>

  );
}

export default App;