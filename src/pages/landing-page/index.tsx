import { useCallback, useState } from 'react';
import gif from '@/assets/placeholder-image.gif';

function LandingPage() {
	const [scrollableHeight, setScrollableHeight] = useState<number>(0);

	const resizeScrollableHeight = useCallback(
		(entries: ResizeObserverEntry[]) => {
			for (let entry of entries) {
				setScrollableHeight(entry.contentRect.height);
			}
		},
		[],
	);

	return (
		<div className="tw-min-h-[2560px] tw-bg-amber-50 tw-p-6">
			<div className="tw-flex tw-items-end tw-justify-between tw-pb-3 tw-font-sans tw-text-7xl tw-uppercase tw-text-slate-700">
				<h1 className="tw-font-semibold tw-tracking-[.25em]">
					Michael
					<br />
					Arita
				</h1>
				<h2 className="tw-text-5xl tw-font-medium tw-tracking-[.25em]">
					Software <br /> Engineer
				</h2>
			</div>
			<img src={gif} alt="temporary image" className="tw-h-fit tw-w-full" />
		</div>
	);
}

export default LandingPage;
