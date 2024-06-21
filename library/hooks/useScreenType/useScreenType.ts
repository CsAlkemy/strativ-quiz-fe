import React from 'react';

export const useScreenType = () => {
    const [xlScreen, setXlScreen] = React.useState(true);
    const [lgScreen, setLgScreen] = React.useState(false);
    const [mdScreen, setMdScreen] = React.useState(false);
    const [smScreen, setSmScreen] = React.useState(false);

    React.useEffect(() => {
        setXlScreen(window.matchMedia('(min-width: 1200px)').matches);
        setLgScreen(window.matchMedia('(min-width: 992px)').matches);
        setMdScreen(window.matchMedia('(min-width: 768px)').matches);
        setSmScreen(window.matchMedia('(min-width: 576px)').matches);
        window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
            setXlScreen(e.matches);
        });
        window.matchMedia('(min-width: 992px)').addEventListener('change', e => {
            setLgScreen(e.matches);
        });
        window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
            setMdScreen(e.matches);
        });
        window.matchMedia('(min-width: 576px)').addEventListener('change', e => {
            setSmScreen(e.matches);
        });
    }, []);

    return { xlScreen, lgScreen, mdScreen, smScreen };
};
