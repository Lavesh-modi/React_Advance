import "./App.css";
import { UserInfo } from "./Component/user-info";
import axios from "axios";
import { useState } from "react";
import { logProps } from "./Component/hoc/log-prop";
import {
  Button,
  GreenButton,
  RedButton,
} from "./Component/Functional/composition";
import { CrimsonButton } from "./Component/Functional/partial";

// const UserInfoWrapper = logProps(UserInfo);

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {/* <UserInfoWrapper test={"hii"} best={"i am best"} /> */}
      <h2>User info </h2>
      {/* <UserInfo /> */}
      <h3>Functional </h3>
      {/* <RedButton text={"text"} /> */}
      <Button text={"warming"}></Button>
      <RedButton text={"danger"}></RedButton>
      <GreenButton text={"Can go"} onclick={()=>console.log("button click")}></GreenButton>
      <br/><br/>
      <CrimsonButton text={"i am good"}/>
    </>
  );
}

export default App;
