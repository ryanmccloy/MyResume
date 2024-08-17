import HomePage from "./components/HomePage";
import ModalIcons from "./components/ModalIcons";
import { ModalProvider } from "./contexts/ModalProvider";
import Toolbar from "./features/Toolbar/Toolbar";

function App() {
  return (
    <HomePage>
      <ModalProvider>
        <ModalIcons />
      </ModalProvider>
      <Toolbar />
    </HomePage>
  );
}

export default App;
