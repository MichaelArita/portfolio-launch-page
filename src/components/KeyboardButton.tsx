import { motion } from 'motion/react';
import { css } from '@emotion/react';

export default function KeyboardButton() {
	return (
		<motion.button
			style={{
				width: '200px',
				height: '200px',
				backgroundColor: '#eee',
				position: 'absolute',
				zIndex: 99,
			}}
			onClick={() => console.log('Clicked')}
			whileTap={{ y: 5, x: 2 }}
		>
			Hey
		</motion.button>
	);
}
