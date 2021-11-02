import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useGlobalContext } from "./GlobalContext";
import Item from "./Item";


function Column({id, name}) {
  
  const [itemsList, setItemsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const {idCount, setIdCount, prevItem, isDropped, setIsDropped} = useGlobalContext();

  const [{isOver}, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => dropItem(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    hover: (item, monitor) => {
      const itemId = item.id;
      console.log("column hover");
    }
  }));

  function addNewItem() {
    if (!inputValue) {
      return
    }
    setIdCount(prev => prev + 1);
    setItemsList(prev => [...prev, {id: idCount, name: inputValue}]);
    setInputValue("");
  }

  function dropItem(x) {
    setIsDropped(true);
    setItemsList(prev => [...prev, x]);
    const newList = [...itemsList, x];
    console.log(newList);
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
