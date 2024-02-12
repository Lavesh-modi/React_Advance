import React, { useState,useEffect } from "react"
import axios from "axios"


export const ResourceLoader = ({resourceUrl,resourceName,children})=>{
  const [resource,setResource]= useState(null);
//   console.log(userId,"userid")

useEffect(()=>{
  (async ()=> {
    const response = await axios.get( resourceUrl);
    setResource(response.data)

    console.log(response,"from the user id")
  })();
},[resourceUrl]);


return(
  <>
  {
    React.Children.map(children,child =>{
      console.log("Child:", child); 
      if(React.isValidElement(child)){
        return React.cloneElement(child,{[resourceName]:resource})
      }
      return child;
    }) 
  }
  </>
)
}