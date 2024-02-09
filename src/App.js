import "./App.css";
// import SplitScreen from "./component/split-screen";
import { books } from "./Data/books";
import { Modal } from "./Component/Modal";
import LargeListBook from "./Component/book/LonglistBook";
import { Regularlist } from "./Component/list/Regularlist";
import { authors } from "./Data/authors";
import { LargeListItem } from "./Component/author/LargeListItem";

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
  return (
    // <SplitScreen
    //   Left={LeftSide}
    //   Right={RightSide}
    //   leftWidth={2}
    //   rightWidth={2}
    // />
<>
    <h2>first one </h2>

    <Modal>
      <LargeListBook books={books[0]}/>
    </Modal>
    <h3>Second one </h3>
    <Modal>
      <LargeListItem author={authors[0]} />
    </Modal>
    </>
  );
}

export default App;
