import HomePage from "./components/HomePage";
import ModalIcons from "./components/ModalIcons";
import Toolbar from "./features/Toolbar/Toolbar";

function App() {
  return (
    <HomePage>
      <ModalIcons />
      <Toolbar />
    </HomePage>
  );
}

export default App;
