import { useCallback, useRef } from 'react';

const ACTION_WIDTH = 80;
const SWIPE_THRESHOLD = 60;

const useSwipeAction = ({ onOpen, onClose }) => {
    const contentRef = useRef(null);
    const actionRef = useRef(null);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const isHorizontalRef = useRef(false);
    const isTrackingRef = useRef(false);
    const isOpenRef = useRef(false);

    const setPosition = useCallback((x) => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        }
        if (actionRef.current) {
            actionRef.current.style.width = `${Math.abs(x)}px`;
        }
    }, []);

    const closePanel = useCallback(() => {
        if (contentRef.current) {
            contentRef.current.style.transition = 'transform 0.3s cubic-bezier(0.5, 1, 0.5, 1)';
            contentRef.current.style.transform = 'translate3d(0, 0, 0)';
        }
        if (actionRef.current) {
            actionRef.current.style.transition = 'width 0.3s cubic-bezier(0.5, 1, 0.5, 1)';
            actionRef.current.style.width = '0px';
        }
        isOpenRef.current = false;
        onClose?.();
    }, [ onClose ]);

    const openPanel = useCallback(() => {
        if (contentRef.current) {
            contentRef.current.style.transition = 'transform 0.3s cubic-bezier(0.5, 1, 0.5, 1)';
            contentRef.current.style.transform = `translate3d(-${ACTION_WIDTH}px, 0, 0)`;
        }
        if (actionRef.current) {
            actionRef.current.style.transition = 'width 0.3s cubic-bezier(0.5, 1, 0.5, 1)';
            actionRef.current.style.width = `${ACTION_WIDTH}px`;
        }
        isOpenRef.current = true;
        onOpen?.(closePanel);
    }, [ onOpen, closePanel ]);

    const onTouchStart = useCallback((e) => {
        startXRef.current = e.touches[0].clientX;
        startYRef.current = e.touches[0].clientY;
        isHorizontalRef.current = false;
        isTrackingRef.current = false;

        if (contentRef.current) {
            contentRef.current.style.transition = 'none';
        }
        if (actionRef.current) {
            actionRef.current.style.transition = 'none';
        }

        if (!isOpenRef.current) {
            onOpen?.(closePanel);
        }
    }, [ onOpen, closePanel ]);

    const onTouchMove = useCallback((e) => {
        const dx = e.touches[0].clientX - startXRef.current;
        const dy = e.touches[0].clientY - startYRef.current;

        if (!isTrackingRef.current) {
            if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;

            isHorizontalRef.current = Math.abs(dx) > Math.abs(dy);
            isTrackingRef.current = true;

            if (!isHorizontalRef.current) return;
        }

        if (!isHorizontalRef.current) return;

        e.preventDefault();

        if (isOpenRef.current) {
            const x = Math.min(0, Math.max(-ACTION_WIDTH, -ACTION_WIDTH + dx));
            setPosition(x);
        } else {
            if (dx > 0) return;
            const x = Math.max(-ACTION_WIDTH, dx);
            setPosition(x);
        }
    }, [ setPosition ]);

    const onTouchEnd = useCallback((e) => {
        if (!isHorizontalRef.current) return;

        const dx = e.changedTouches[0].clientX - startXRef.current;

        if (isOpenRef.current) {
            dx > ACTION_WIDTH / 2 ? closePanel() : openPanel();
        } else {
            Math.abs(dx) >= SWIPE_THRESHOLD ? openPanel() : closePanel();
        }
    }, [ openPanel, closePanel ]);

    return {
        contentRef,
        actionRef,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        closePanel,
        openPanel,
    };
};

export default useSwipeAction;