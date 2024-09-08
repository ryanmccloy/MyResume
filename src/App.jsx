import { ModalProvider } from "./contexts/ModalProvider";

import HomePage from "./components/HomePage";
import ModalIcons from "./components/ModalIcons";
import Toolbar from "./features/Toolbar/Toolbar";

function App() {
  return (
    <HomePage>
      <ModalProvider>
        <ModalIcons where="homepage" />
      </ModalProvider>
      <Toolbar />
    </HomePage>
  );
}

export default App;
