import React from 'react';

export const useWindowSize = () => {
    interface WindowSize {
        width: number | undefined;
        height: number | undefined;
    }

    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: undefined,
        height: undefined,
    });
    React.useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};
