import React, { useState,useEffect } from "react"
import axios from "axios"


export const CurrentUserLoader = ({children})=>{
  const [user,setUser]= useState(null);

useEffect(()=>{
  (async ()=> {
    const response = await axios.get("/current-user");
    setUser(response.data)

    console.log(response)
  })();
},[]);


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