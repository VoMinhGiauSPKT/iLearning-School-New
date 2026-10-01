import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { appName } from '@constants';

const useScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        const scrollEl = document.documentElement;

        // Lấy vị trí scroll đã lưu
        const savedPosition = sessionStorage.getItem(`${appName}-${location.pathname}`);
        if (savedPosition) {
            scrollEl.scrollTop = parseInt(savedPosition, 10);
        }

        // Lưu vị trí scroll khi cuộn
        const handleScroll = () => {
            sessionStorage.setItem(`${appName}-${location.pathname}`, scrollEl.scrollTop);
        };

        scrollEl.addEventListener('scroll', handleScroll);
        return () => scrollEl.removeEventListener('scroll', handleScroll);
    }, [ location ]);
};

export default useScrollRestoration;
