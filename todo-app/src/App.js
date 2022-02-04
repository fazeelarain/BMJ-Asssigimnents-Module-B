import react, { useState } from "react";
import TodoLists from "./TodoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="add_btn" onClick={listOfItems}>
            {" "}
            Add Item
          </button>
          <ol>
            {Items.map((itemval) => {
              return <TodoLists text={itemval} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
