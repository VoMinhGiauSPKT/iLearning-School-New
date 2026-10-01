import { useEffect, useRef, useState } from 'react';

const useHorizontalScroll = (dependencies, loading, onLoadMore, hasMore = true) => {
    const scrollRef = useRef(null);
    const [ showLeftArrow, setShowLeftArrow ] = useState(false);
    const [ showRightArrow, setShowRightArrow ] = useState(true);
    
    const isFetchingRef = useRef(false);

    useEffect(() => {
        if (!loading) {
            isFetchingRef.current = false;
        } else {
            isFetchingRef.current = true;
        }
    }, [ loading ]);

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    const handleArrowClick = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -412 : 412;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollEvent = () => {
        checkScrollPosition();
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            
            if (scrollWidth - scrollLeft - clientWidth < 512 && !loading && !isFetchingRef.current && hasMore) {
                if (onLoadMore) {
                    isFetchingRef.current = true; 
                    onLoadMore();
                }
            }
        }
    };

    useEffect(() => {
        checkScrollPosition();
    }, [ dependencies, hasMore ]); 

    return { scrollRef, showLeftArrow, showRightArrow, handleArrowClick, handleScrollEvent };
};

export default useHorizontalScroll;