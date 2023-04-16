import "./Sidebar.css";
import man from "./img/man.png";
import SidebarChat from "./SidebarChat";
// import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import "./SidebarChat.css";
import {  addDoc, collection, query, orderBy, onSnapshot,} from "firebase/firestore";


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


  const createChat = async () => {
    const group = prompt("Please enter your group name");
    
    if (group) {
      try {
        const docRef = await addDoc(collection(db, "groups"), {                    
          name: group,
        });

 
      } catch (e) {
         console.error("Error adding document: ", e);
      }
    }
  };


  return (
    <div className="sidebar">
     
      {/*--------------------------- Header------------------------- */}
      <div className="sidebarHeader">
        <div style={{ display: "flex" }}>
        
          <img src={man} alt="" />
        
          <h1 className="text ac" >{userName}</h1>
        
        </div>
      </div>     

      {/* ---------------------------Sidebar chats---------------------  */}
      <div className="sidebarChats">
       
        {/* ---------------------------  Add NEW  chats---------------------  */}
    <div onClick={createChat} className="sidebarChat"> 
    <h1 className="show" > Click here to <br></br>Add New Chat-Room</h1>
     </div>


        {group.map((group) => {                       

       return <SidebarChat key={group.id} name={group.name} id={group.id} />;
       
       })}
      </div>
    </div>
  );
}
