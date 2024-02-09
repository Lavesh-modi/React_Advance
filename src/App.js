
import './App.css';
import SplitScreen from './component/split-screen';


const LeftSide = ()=>{
  return(
    <h2 style={{
      backgroundColor:"olive"
    }}> i am Left</h2>
  )
}


const RightSide =()=>{
  return(
    <h2 style={{
      backgroundColor:"black"
    }}> i am Right</h2>
  )
}
function App() {
  return (
   <SplitScreen Left={LeftSide}  Right={RightSide} leftWidth={2} rightWidth={2}  />
  );
}

export default App;
