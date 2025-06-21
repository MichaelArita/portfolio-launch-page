'use client';
import React from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import { TextEffect } from '@/components/TextEffect';
import KeyboardButton from '@/components/KeyboardButton';
import { cn } from '@/lib/utils';

export default function ViteReact() {
	return (
		<>
			<div className="tw-relative tw-flex tw-h-screen tw-w-full tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-lg tw-bg-slate-900">
				<div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-z-20 tw-h-full tw-w-full tw-bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

				<Boxes />
				<h1
					className={cn(
						'tw-md:text-8xl tw-relative tw-z-20 tw-font-sans tw-text-8xl tw-tracking-wider tw-text-white',
					)}
				>
					MICHAEL ARITA
				</h1>
				{/* <p className="relative z-20 mt-2 text-center text-neutral-300">
					Framer motion is the best animation library ngl
				</p> */}
				<KeyboardButton />

				<TextEffect
					per="word"
					as="p"
					preset="slide"
					className="tw-relative tw-z-20 tw-mt-2 tw-text-center tw-text-neutral-300"
				>
					Full Stack Software Engineer
				</TextEffect>
			</div>
		</>
	);
}
