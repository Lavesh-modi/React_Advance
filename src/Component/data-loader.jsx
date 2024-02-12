import React, { useState,useEffect } from "react"
import axios from "axios"


export const DataLoader = ({getUser = ()=>{},children,userId})=>{
  const [user,setUser]= useState(null);
  console.log(userId,"userid")

useEffect(()=>{
  (async ()=> {
    const data = await getUser()
    setUser(data)

    console.log(data,"from the user id")
  })();
},[getUser]);


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