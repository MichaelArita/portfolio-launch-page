import ViteReact from './pages/vite-react-default/index.jsx';
import LandingPage from './pages/temporary-landing/index.jsx';
import Cursor from './components/ui/Cursor.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    function handleMouseMove(event) {
      // console.log(`Mouse Position: ${event.clientX}, ${event.clientY}`);

      setMouseX(event.clientX - 5);
      setMouseY(event.clientY - 5);
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <>
      <Cursor clientX={ mouseX} clientY={mouseY} />
      <ViteReact />
      {/* <LandingPage /> */}
    </>
  );
}

export default App
