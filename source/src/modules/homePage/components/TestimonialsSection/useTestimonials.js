import { useMemo } from 'react';

import { DEFAULT_TESTIMONIALS } from './constants';

export const useTestimonials = (propsTestimonials) => {
    const testimonials = useMemo(() => {
        if (propsTestimonials && propsTestimonials.length > 0) return propsTestimonials;
        return DEFAULT_TESTIMONIALS;
    }, [ propsTestimonials ]);

    return {
        testimonials,
    };
};

export default useTestimonials;
