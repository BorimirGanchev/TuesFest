import React,{useState,useEffect} from "react";
import axios from "axios";
export default function UserDocuments(props){
    const [UserDocuments,setUserDocuments] = useState();
    const getUserDocuments = async() => {
            try{
                let userDocuments = await axios.get("http://localhost:5000/api/users",{
                    params:{
                        name:props.name
                    }
                });
                console.log(userDocuments.data[0].documents)
                console.log("---------user");
                if(userDocuments != undefined){
                    var documents =userDocuments.data[0].documents.map((doc) => {
                    return <div>{doc.name ? doc.name : doc.Name} </div>
                })
            }
                await setUserDocuments(documents);
                console.log(UserDocuments);
            }catch(e){
                console.log(e);
            }
        }
        
   
    return (
        <div className="user-documents-container">
            <button onClick = {getUserDocuments}>Click</button>
            {UserDocuments}
        </div>
    )
}