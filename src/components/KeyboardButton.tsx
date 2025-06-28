import { motion, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';
import { css } from '@emotion/react';
import { useEffect, useCallback } from 'react';

type KeyboardButtonProps = {
	label: string;
	onAction: () => void;
	className?: string;
};

const keebStyles = css`
	color: #525252;
	text-decoration: underline;
	text-transform: uppercase;
	font-size: 17px;
	background-color: #f1f5f9;
	border: 1.5px solid #262626;

	outline: none;
	border-radius: 8px;
	cursor: pointer;
	box-shadow: 2px 3px 0px 1px #f1f5f9;
	padding: 10px 18px;
	/* transition: all ease 0.1s; */

	::after {
		box-shadow: var(--offset-x) var(--offset-y) 0px var(--spread-radius) #f1f5f9;
	}

	/* &:hover {
		box-shadow: 1px 2px 0px 1px #f1f5f9;
		transform: translateY(1px) translateX(1px);
	} */

	/* &:active {
		box-shadow: 0px 0px 0px 0px #f1f5f9;
	} */
`;

export default function KeyboardButton({
	label = 'x',
	onAction,
	className,
}: KeyboardButtonProps) {
	const [scope, animated] = useAnimate();

	const handleKeyPress = useCallback(
		(e) => {
			if (e.key === label) {
				console.log(`key Pressed: ${e.key}`);
				const controls = animated(scope.current, {
					y: 3,
					x: 2,
					padding: '11px 19px',
					boxShadow: '0px 0px 0px 0px',
				});

				onAction();

				return () => controls.stop();
			}
		},
		[onAction],
	);

	const handleKeyUp = useCallback((e) => {
		if (e.key === label) {
			console.log(`key up: ${e.key}`);
			const controls = animated(scope.current, {
				y: 0,
				x: 0,
				padding: '10px 18px',
				boxShadow: '2px 3px 0px 1px #f1f5f9',
			});
			return () => controls.stop();
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
			document.addEventListener('keyup', handleKeyUp);
		};
	}, [handleKeyPress, handleKeyUp]);

	return (
		<motion.button
			ref={scope}
			className={cn(
				// 'tw-text-xl tw-uppercase tw-tracking-wider tw-text-gray-800 tw-underline',
				// 'tw-rounded tw-border-2 tw-border-gray-800',
				// 'tw--shadow-[2px 3px 0px 1px]',
				// 'tw-cursor-pointer tw-outline-none',
				className,
			)}
			css={keebStyles}
			onClick={() => console.log('Clicked')}
			whileHover={{ y: 2, x: 1, boxShadow: '1px 2px 0px 1px #f1f5f9' }}
			whileTap={{ y: 3, x: 2, boxShadow: '0px 0px 0px 0px' }}
		>
			{label}
		</motion.button>
	);
}
