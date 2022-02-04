
import Child1 from "./components/props1";
import Child2 from "./components/props2";
import { Child3, Child3kachild } from "./components/props3";
function App() {
  let arr = [
    "HTML ",
    "CSS ",
    "JAVASCRIPT ",
    "BOOTSRAP ",
    "REACT ",
    "MATERIAL-UI",
  ];
  let obj = {
    skill1: "Nodejs",
    skill2: "MongoDB",
    skill3: "Express",
    skill4: "ES6",
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Child1 name="Fazeel Ahmed" />
      <Child2 name="Fazeel Ahmed" experience={"No-Experience-YET"} />
      <Child3 />
      <Child3kachild skill={arr} obj={obj} />
    </div>
  );
}

export default App;
