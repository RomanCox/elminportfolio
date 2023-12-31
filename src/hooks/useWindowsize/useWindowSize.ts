import {useState, useEffect} from 'react';

interface windowSizeType {
    width: number;
    height: number;
}

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<windowSizeType>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};
			window.addEventListener('resize', handleResize);
			handleResize();
			return () => { window.removeEventListener('resize', handleResize); };
		}
	}, []);
	return windowSize;
};
