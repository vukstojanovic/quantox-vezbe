
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import { ContextProvider } from './GlobalContext';

function App() {
  
  const columnsList = ["backlog", "in progress", "complete", "on hold"];
  
  return (
    <ContextProvider>
    <DndProvider backend={HTML5Backend}>
      <main>
        {columnsList.map((columnName, index) => {
          return <Column key={index} name={columnName} />
        })}
      </main>
    </DndProvider>
    </ContextProvider>
  );
}

export default App;
