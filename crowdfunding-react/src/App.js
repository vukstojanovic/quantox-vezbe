
import Nav from './Nav';
import Main from './Main';
import Modal from './Modal';
import Final from './Final';
import {ContextProvider} from './context';


function App() {

  return (
      <ContextProvider>
        <Nav/>
        <Main/>
        <Modal/>
        <Final/>
      </ContextProvider>
  );
}

export default App;
