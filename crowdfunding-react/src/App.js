
import Nav from './components/Layout/nav/Nav';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import Final from './components/modal/Final';
import {ContextProvider} from './context/GlobalContext';


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
