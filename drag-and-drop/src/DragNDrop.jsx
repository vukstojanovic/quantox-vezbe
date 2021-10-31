
import Images from './Images';
import { useDrop } from 'react-dnd';

export default function DragNDrop() {

    // const 

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: () => console.log("hello"),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));
    
    // function addImageToBoard(item) {
        
    // }

    return (
        <>
            <Images/>
            <div ref={drop} className="board">
            </div>
        </>
    )

}










