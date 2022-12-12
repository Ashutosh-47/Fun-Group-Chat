// import React, { useState, useContext } from "react";
// import "./Login.css";
// import { auth , signInWithGoogle , signIn } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { LoginContext } from "./LoginContext";
// import { Link } from "react-router-dom";


// export default function Register() {
//   const { setUserLogin, setUserName } = useContext(LoginContext);
//   const [email, setEmail] = useState("");
  

//   const signUp = () => {
//     signIn().then((res) => {
//       const name = res.user.displayName;
//       const email = res.user.email;
//       const profilepic = res.user.photoURL;
  
//       localStorage.setItem("name" , name);
//       localStorage.setItem("email" , email);
//       localStorage.setItem("profilepic" , profilepic);
  
      
//     setUserName(localStorage.getItem("name"));
//     setEmail(localStorage.getItem("email"));
//     setUserLogin(true);
    
//     }).catch((error) => {
//       console.log(error);
//     })
//   };
//   return (
   
//       <div className="auth">
//             <img className="auth-bg1" src="/img/loginBg.svg" alt="background" />
//             <img className="auth-bg2" src="/img/loginBg2.svg" alt="background" />
//                 <div className="login">
//                     <div className="login__container">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="whatapp-logo" />
//                         <div className="login__text">
//                             <h1>Sign in to WhatsApp</h1>
//                         </div>
//                         <button className="btn" onClick={signUp}>Sign in google</button>
//                     </div>
//                 </div>   
//     </div>
//   );
// }
