
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';

function App() { 
  
  return (
    <div className="container">
      <main>
        <Column name={"backlog"} />
        <Column name={"in progress"} />
        <Column name={"complete"} />
        <Column name={"on hold"} />
      </main>
    </div>
  );
}

export default App;
