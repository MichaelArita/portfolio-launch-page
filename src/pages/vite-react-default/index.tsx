'use client';
import React from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import { TextEffect } from '@/components/TextEffect';
import { cn } from '@/lib/utils';

export default function ViteReact() {
	return (
		<>
			<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
				<div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

				<Boxes />
				<h1
					className={cn(
						'relative z-20 font-sans text-8xl tracking-wider text-white md:text-8xl',
					)}
				>
					MICHAEL ARITA
				</h1>
				{/* <p className="relative z-20 mt-2 text-center text-neutral-300">
					Framer motion is the best animation library ngl
				</p> */}
				<TextEffect
					per="word"
					as="p"
					preset="slide"
					className="relative z-20 mt-2 text-center text-neutral-300"
				>
					Full Stack Software Engineer
				</TextEffect>
			</div>
			<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
				<div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

				<Boxes />
				<h1
					className={cn(
						'relative z-20 font-sans text-8xl tracking-wider text-white md:text-8xl',
					)}
				>
					MICHAEL ARITA
				</h1>
				{/* <p className="relative z-20 mt-2 text-center text-neutral-300">
					Framer motion is the best animation library ngl
				</p> */}
				<TextEffect
					per="word"
					as="p"
					preset="slide"
					className="relative z-20 mt-2 text-center text-neutral-300"
				>
					Full Stack Software Engineer
				</TextEffect>
			</div>
		</>
	);
}
