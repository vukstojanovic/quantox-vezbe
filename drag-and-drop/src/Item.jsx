import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useGlobalContext } from "./GlobalContext";

function Item({id, itemName, itemsList, setItemsList}) {

  const {setCurrentDraggableItem} = useGlobalContext();

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
      }
  }, [isDragging]);

  function dragItem(id) {
    console.log(id);
    const filteredList = itemsList.filter(item => item.id !== id);
    setItemsList(filteredList);
    const currentItem = itemsList.filter(item => item.id === id)[0];
    setCurrentDraggableItem(currentItem);
  }

  return (
    <div ref={drag} className="element">
        {itemName}
    </div>
  )

}

export default Item;