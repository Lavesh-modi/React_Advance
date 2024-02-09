import React, { useState,useEffect } from "react"
import axios from "axios"


export const UserLoader = ({children,userId})=>{
  const [user,setUser]= useState(null);
  console.log(userId,"userid")

useEffect(()=>{
  (async ()=> {
    const response = await axios.get( `/users/${userId}`);
    setUser(response.data)

    console.log(response,"from the user id")
  })();
},[userId]);


return(
  <>
  {
    React.Children.map(children,child =>{
      console.log("Child:", child); 
      if(React.isValidElement(child)){
        return React.cloneElement(child,{user})
      }
      return child;
    }) 
  }
  </>
)
}