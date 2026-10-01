import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './SliderScroll.module.scss';

const SliderScroll = ({ className, children, scrollToId }) => {
    const sliderRef = useRef(null);
    const [ isDown, setIsDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ sliderWidth, setSliderWidth ] = useState(null);

    const handleMouseDown = (e) => {
        setIsDown(true);
        const slider = sliderRef.current;
        slider.classList.add(styles.active);
        setStartX(e.pageX - slider.offsetLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        sliderRef.current.classList.remove(styles.active);
    };

    const handleMouseUp = () => {
        setIsDown(false);
        sliderRef.current.classList.remove(styles.active);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = sliderRef.current;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = slider.scrollLeft - walk;
    };

    const saveScrollPosition = () => {
        const slider = sliderRef.current;
        if (slider) {
            sessionStorage.setItem('sliderScrollPosition', slider.scrollLeft);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const savedScrollPosition = sessionStorage.getItem('sliderScrollPosition');
        if (savedScrollPosition) {
            slider.scrollLeft = parseInt(savedScrollPosition, 10);
            saveScrollPosition();
        }

        if (scrollToId && scrollToId !== 'all' && scrollToId !== 'top') {
            const targetElement = slider.querySelector(`#service-${scrollToId}`);
            if (targetElement) {
                const scrollPosition = targetElement.offsetLeft - (slider.clientWidth / 2) + (targetElement.clientWidth / 2);
                slider.scrollLeft = scrollPosition;
                saveScrollPosition();
            }
        }
    }, [ scrollToId, sliderWidth ]);

    return (
        <div
            className={classNames(styles.slider, className)}
            ref={sliderRef}
            style={{ maxWidth: sliderWidth ? `${sliderWidth}px` : undefined }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={saveScrollPosition}
        >
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { 'data-id': child.props.id || index }),
            )}
        </div>
    );
};

export default SliderScroll;
