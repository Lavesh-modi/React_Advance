import "./App.css";
// import SplitScreen from "./component/split-screen";
import { books } from "./Data/books";
import { Modal } from "./Component/Modal";
import LargeListBook from "./Component/book/LonglistBook";
import { Regularlist } from "./Component/list/Regularlist";
import { authors } from "./Data/authors";
import { LargeListItem } from "./Component/author/LargeListItem";
import { CurrentUserLoader } from "./Component/current-user-loader";
import { UserInfo } from "./Component/user-info";
import { UserLoader } from "./Component/user-info-loader";
import { ResourceLoader } from "./Component/resource-loader";
import { BookInfo } from "./Component/book-info";
import { DataLoader } from "./Component/data-loader";

// import { axios } from "axios";
// import {axios} from "axios";
import axios from "axios";
import { DataLoaderWithRender } from "./Component/dala-loaderwithrender";
import { UncontrolledForm } from "./Component/form/uncontrolled-form";
import { ControlledForm } from "./Component/form/controlled-from";
import { useState } from "react";
import { ControlModal } from "./Component/Modal/Controlled-modal";

const fetch = async(url)=>{
  const response = await axios.get(url);
  return response.data
}


// const LeftSide = () => {
//   return (
//     <h2
//       style={{
//         backgroundColor: "olive",
//       }}
//     >
//       {" "}
//       i am Left
//     </h2>
//   );
// };

// const RightSide = () => {
//   return (
//     <h2
//       style={{
//         backgroundColor: "black",
//       }}
//     >
//       {" "}
//       i am Right
//     </h2>
//   );
// };
function App() {
  const [display,setDisplay]=useState(false)
  return (
  <>


<h3> Working on the form</h3>
     <UncontrolledForm/>

     <h4>Working on the Controlled form</h4>
     <ControlledForm/>
     <h5>Controlled Mosal</h5>
     <ControlModal display={display} close={()=>setDisplay(false)} >

      <p>I am in the Modal</p>
     </ControlModal>
     <button onClick={()=>{
      console.log(display,"<<<<<<<<<<")
         setDisplay(!display);
      }}> {display ? "Hide Modal": "Display Modal"}</button>



     
    </>
  );
}

export default App;
