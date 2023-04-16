import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import {  addDoc, collection, query, orderBy, onSnapshot,} from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, name, id }) {
  
  const [msg, setMsg] = useState("");    

  useEffect(() => {                                                 
  
    if (id) {
      const q = query(                                    
        collection(db, "groups", id, "messages"),
        orderBy("timestamp", "asc")
      );

      const getMessage = onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setMsg(doc.data());                                                           
        });
      });
    }
  }, [id]);
  
  
  return (                        //------------------------------- --------------------------

    <Link to = {`group/${id}`}>
    
      <div className="sidebarChat active">
        <img  src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt=""/>
        <div className="sidebarChatInfo">
          <h2>{name}</h2>
          <p>{msg.message}</p>
        </div>
      </div>
    </Link>
  
    
  )
  
}
