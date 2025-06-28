'use client';
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
	const rows = new Array(150).fill(1);
	const cols = new Array(100).fill(1);
	let colors = [
		'--sky-300',
		'--pink-300',
		'--green-300',
		'--yellow-300',
		'--red-300',
		'--purple-300',
		'--blue-300',
		'--indigo-300',
		'--violet-300',
	];
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div
			style={{
				transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
			}}
			className={cn(
				'tw- tw- tw-absolute tw--top-1/4 tw-left-1/4 tw-z-0 tw-flex tw-h-full tw-w-full tw--translate-x-1/2 tw--translate-y-1/2 tw-p-4',
				className,
			)}
			{...rest}
		>
			{rows.map((_, i) => (
				<motion.div
					key={`row` + i}
					className="tw-relative tw-h-8 tw-w-16 tw-border-l tw-border-neutral-200"
				>
					{cols.map((_, j) => (
						<motion.div
							whileHover={{
								backgroundColor: `var(${getRandomColor()})`,
								transition: { duration: 0 },
							}}
							animate={{
								transition: { duration: 2 },
							}}
							key={`col` + j}
							className="tw-relative tw-h-8 tw-w-16 tw-border-r tw-border-t tw-border-neutral-200 tw-border-opacity-25"
						>
							{j % 2 === 0 && i % 2 === 0 ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="tw-pointer-events-none tw-absolute tw--left-[22px] tw--top-[14px] tw-h-6 tw-w-10 tw-border-opacity-25 tw-stroke-[1px] tw-text-slate-700"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v12m6-6H6"
									/>
								</svg>
							) : null}
						</motion.div>
					))}
				</motion.div>
			))}
		</div>
	);
};

export const Boxes = React.memo(BoxesCore);
