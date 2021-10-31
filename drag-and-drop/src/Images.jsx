
import { useDrag } from 'react-dnd';

function Images() {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));
  
    return (
      <div>
        <img ref={drag} src="https://freepngimg.com/static/img/whatsapp.png" alt="phone"/>
        <img ref={drag} src="https://freepngimg.com/static/img/facebook.png" alt="facebook"/>
        <img ref={drag} src="https://freepngimg.com/static/img/twitter.png" alt="twitter"/>
      </div>
    );
  }
  
  export default Images;




