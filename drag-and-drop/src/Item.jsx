import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useGlobalContext } from "./GlobalContext";

function Item({id, itemName, itemsList, setItemsList}) {

  const {prevItem, setPrevItem, isDropped, setIsDropped} = useGlobalContext();
  const itemRef = useRef(null);

  const [{isDragging}, drag] = useDrag(() => ({
    type: "div",
    item: {id: id, name: itemName},
    collect: (monitor) => ({
        isDragging: monitor.isDragging()
    })
  }));

  useEffect(() => {
      if (isDragging) {
        dragItem(id);
        // setIsDropped(false);
        // setPrevItem({id: id, name: itemName});
      }
      else if (isDropped) {
        // const filteredList = itemsList.filter(item => item.id !== prevItem.id);
        // console.log(filteredList);
        // setItemsList(filteredList);
      }
  }, [isDragging, isDropped]);


  function dragItem(id) {
    const filteredList = itemsList.filter(item => item.id !== id);
    const removedItem = itemsList.filter(item => item.id === id)[0];
    setItemsList(filteredList);
    console.log(filteredList);
  }

  function dropItem(x) {
    setIsDropped(true);
    setItemsList(prev => [...prev, x]);
    const newList = [...itemsList, x];
    console.log(newList);
  }

  return (
    <div ref={drag} className={isDragging ? "element js-hidden" : "element"}>
        {itemName}
    </div>
  )

}

export default Item;