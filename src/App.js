import { useResizeDetector } from 'react-resize-detector';
import { StoreProvider } from './utils/GlobalState';
import './App.css';

import GameMenu from "./pages/GameMenu/GameMenu";

function App() {
  const { width, ref } = useResizeDetector();
  const scaleFactor = width / 480 || 1;

  return (
    <div id="screenContainer" ref={ref}>
      <div id="viewport" style={{transform: "scale(" + scaleFactor +")"}}>
        <StoreProvider>
          <GameMenu />
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
