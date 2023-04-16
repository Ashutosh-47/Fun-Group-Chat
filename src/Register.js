import React, { useState, useContext } from "react";
import "./Login.css";
import { auth , signInWithGoogle , signIn } from "./firebase";
import { LoginContext } from "./LoginContext";

export default function Register() {

  const { setUserLogin, setUserName } = useContext ( LoginContext ) ;   

  const [email, setEmail] = useState("");
  
  const signUp = () => {                           
  
    signIn().then((res) => {                             
      
      const name = res.user.displayName;           
      const email = res.user.email;
      const profilepic = res.user.photoURL;
  
      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
      localStorage.setItem("profilepic" , profilepic);
  
      
    setUserName(localStorage.getItem("name"));                                         
    setEmail(localStorage.getItem("email"));                                             
    setUserLogin(true);                                                                                               
    
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
         <div className="auth">     
               <div className="login">
                    <div className="login__container">
                        <img src="../logo.jfif" alt="whatapp-logo" />
                        <div className="login__text">  <h1>Please SignIn <br></br> to <br></br> Fun-Group-Chat</h1></div>

                        <button className="btn" onClick={signUp}>Sign in google</button>
                   
                    </div>
                </div>   
    </div>
  );
}
