import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import KeyboardButton from '../KeyboardButton';

export default function Drawer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, [isOpen, setIsOpen]);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, [isOpen, setIsOpen]);

	return (
		<div>
			<AnimatePresence>
				{isOpen && (
					<motion.footer
						key={'footearrrarar'}
						className={cn(
							'tw-fixed tw-bottom-0 tw-left-0 tw-z-[100] tw-w-full',
						)}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 100, transition: { duration: 0.5 } }}
							exit={{ opacity: 0, transition: { duration: 0.5 } }}
							className={cn(
								'tw-absolute tw-bottom-0 tw-z-[1] tw-h-svh tw-w-full tw-bg-black tw-bg-opacity-20 tw-backdrop-blur-sm',
							)}
						></motion.div>
						<motion.div
							initial={{ y: '+100%' }}
							animate={{
								y: '0px',
								transition: {
									duration: 0.3,
									type: 'spring',
									damping: 15,
									stiffness: 100,
									mass: 0.1,
								},
							}}
							exit={{
								y: '+108%',
								transition: {
									duration: 0.3,
									type: 'spring',
									damping: 18,
									stiffness: 150,
									mass: 0.1,
								},
							}}
							className={cn(
								'tw-font-sans[roboto] tw-text-center tw-text-xl tw-font-medium tw-uppercase tw-italic tw-tracking-wide tw-text-neutral-100',
								'tw-relative tw-z-[2] tw-block tw-w-full tw-bg-neutral-700',
							)}
						>
							<KeyboardButton
								key="dsahfeiisa"
								label="x"
								onAction={handleClose}
								className={cn(
									'tw-absolute tw-right-5 tw-top-[-20px] tw-z-[5] tw-flex',
								)}
							/>
							Contact
							<div className={cn('tw-block tw-min-h-80')}></div>
						</motion.div>
					</motion.footer>
				)}
			</AnimatePresence>

			<KeyboardButton
				key="bareii21341512"
				label="i"
				onAction={handleOpen}
				className={cn('tw-absolute tw-right-5 tw-top-[90%] tw-z-50')}
			/>
		</div>
	);
}
