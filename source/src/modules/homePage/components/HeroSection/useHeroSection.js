import { useCallback, useEffect, useState } from 'react';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { adaptPublicSettings } from '@utils/ilearningAdapters';

export const useHeroSection = (propsSettings) => {
    const { data: rawSettings } = useFetch(apiConfig.setting.getPublic, {
        immediate: !propsSettings,
    });

    const sliderList = propsSettings?.slider || adaptPublicSettings(rawSettings)?.slider || [];
    const [ activeHeroSlide, setActiveHeroSlide ] = useState(0);
    const totalSlides = sliderList.length;

    useEffect(() => {
        if (totalSlides <= 1) return;
        const timer = setInterval(() => {
            setActiveHeroSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [ totalSlides ]);

    const handleHeroIndicatorClick = useCallback(() => {
        if (totalSlides > 1) {
            setActiveHeroSlide((prev) => (prev + 1) % totalSlides);
        }
    }, [ totalSlides ]);

    const currentHero = sliderList[activeHeroSlide] || sliderList[0] || null;

    return {
        sliderList,
        currentHero,
        activeHeroSlide,
        totalSlides,
        handleHeroIndicatorClick,
    };
};

export default useHeroSection;
