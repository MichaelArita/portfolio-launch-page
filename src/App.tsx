import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Cursor from './components/ui/Cursor.jsx';
import ViteReact from './pages/vite-react-default/index.tsx';
import LandingPage from './pages/landing-page/index.tsx';
import { StickyScrollRevealDemo } from './pages/temporary-landing/index.tsx';

function App() {
	// const [mouseX, setMouseX] = useState(0);
	// const [mouseY, setMouseY] = useState(0);

	// useEffect(() => {
	//   function handleMouseMove(event) {
	//     // console.log(`Mouse Position: ${event.clientX}, ${event.clientY}`);

	//     setMouseX(event.clientX - 5);
	//     setMouseY(event.clientY - 5);
	//   }

	//   document.addEventListener('mousemove', handleMouseMove);

	//   return () => {
	//     document.removeEventListener('mousemove', handleMouseMove);
	//   }
	// }, []);

	return (
		<>
			{/* <Cursor clientX={mouseX} clientY={mouseY} /> */}
			{/* <motion.div
				animate={{ scale: [0, 1.3, 1] }}
				transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
			> */}
			<StickyScrollRevealDemo />
			{/* <LandingPage /> */}
			{/* <ViteReact /> */}
			{/* </motion.div> */}
			{/* <LandingPage /> */}
		</>
	);
}

export default App;
