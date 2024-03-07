import "./App.css";
import { UserInfo } from "./Component/user-info";
// import axios from "axios";
import { useState } from "react";
import { logProps } from "./Component/hoc/log-prop";
import { Recursive } from "./Component/Functional/recursive";

const UserInfoWrapper = logProps(UserInfo);

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innervalues1",
    innerKey2: {
      innerInnerKey1: "ineerIneerValues1",
      innerInnerKey2: "innerIneerValues2",
    },
  },
  key3: "valuers",
};
function App() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <UserInfoWrapper test={"hii"} best={"i am best"} />
      <h2>User info </h2>
      <UserInfo />
      <h3>Recursive Component </h3>
      <Recursive data={myNestedObject} />
    </>
  );
}

export default App;
