import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import man from "./img/man.png";
import SidebarChat from "./SidebarChat";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export default function Sidebar({ userName }) {
  const [group, setGroup] = useState([]);

  const getGroups = async () => {
    const getData = onSnapshot(collection(db, "groups"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setGroup(list);
    });
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div className="sidebar">
      {/*--------------------------- Header------------------------- */}
      <div className="sidebarHeader">
        <div style={{ display: "flex" }}>
          <img src={man} alt="" />
          <h1 className="text ac" >{userName}</h1>
        </div>
      </div>
      {/* --------------------------sidebar Search--------------------- */}
     
      {/* ---------------------------Sidebar chats--------------------- */}
      <div className="sidebarChats">
        <SidebarChat addNewChat />
        {group.map((group) => {
          return <SidebarChat key={group.id} name={group.name} id={group.id} />;
        })}
      </div>
    </div>
  );
}
