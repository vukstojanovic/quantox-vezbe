import { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";


function Column({id, name}) {
  
  const [itemsList, setItemsList] = useState([{id: 0, name: "Item1"}]);
  const [inputValue, setInputValue] = useState("");
  const [idCount, setIdCount] = useState(1);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => dropItem(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  function addNewItem() {
    if (!inputValue) {
      return
    }
    console.log(inputValue);
    setIdCount(prev => prev + 1);
    setItemsList(prev => [...prev, {id: idCount, name: inputValue}]);
    console.log(itemsList);
  }

  function dropItem(x) {
    // const newList = itemsList.filter(item => item.id !== id);
    console.log(x);
    setItemsList(prevList => [...prevList, x]);
  }
  
  return (
    <div className="column-container">
      <div className="box">
        <h3>{name}</h3>
        <div ref={drop} className="column">
            {itemsList.map((item, index) => {
              const name = item.name;
              const id = item.id;
              return (
                <Item key={id} id={id} itemName={name} itemsList={itemsList} setItemsList={setItemsList} />
              )
            })}
        </div>
        <div className="new">
          <button className="btn" onClick={addNewItem}>Add Task</button>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default Column;
