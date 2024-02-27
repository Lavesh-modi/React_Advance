import "./App.css";
// import SplitScreen from "./component/split-screen";
// import { books } from "./Data/books";
// import { Modal } from "./Component/Modal";
// import LargeListBook from "./Component/book/LonglistBook";
// import { Regularlist } from "./Component/list/Regularlist";
// import { authors } from "./Data/authors";
// import { LargeListItem } from "./Component/author/LargeListItem";
// import { CurrentUserLoader } from "./Component/current-user-loader";
import { UserInfo } from "./Component/user-info";
// import { UserLoader } from "./Component/user-info-loader";
// import { ResourceLoader } from "./Component/resource-loader";
// import { BookInfo } from "./Component/book-info";
// import { DataLoader } from "./Component/data-loader";

// import { axios } from "axios";
// import {axios} from "axios";
import axios from "axios";
// import { DataLoaderWithRender } from "./Component/dala-loaderwithrender";
// import { UncontrolledForm } from "./Component/form/uncontrolled-form";
// import { ControlledForm } from "./Component/form/controlled-from";
import { useState } from "react";
// import { ControlModal } from "./Component/Modal/Controlled-modal";
import { logProps } from "./Component/hoc/log-prop";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <UserInfoWrapper test={"hii"} best={"i am best"} />
      <h2>User info </h2>
      <UserInfo />
      <h3> Resource Users</h3>
    </>
  );
}

export default App;
