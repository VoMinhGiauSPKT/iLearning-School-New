import { useCallback, useMemo, useState } from 'react';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { adaptInstructors } from '@utils/ilearningAdapters';

import { FALLBACK_INSTRUCTORS } from './constants';

export const useInstructorSection = (propsInstructors) => {
    const { data: rawMentors } = useFetch(apiConfig.mentor.getPublicList, {
        immediate: !propsInstructors,
    });

    const instructors = useMemo(() => {
        if (propsInstructors && propsInstructors.length > 0) return propsInstructors;
        const adapted = adaptInstructors(rawMentors);
        return adapted.length > 0 ? adapted : FALLBACK_INSTRUCTORS;
    }, [ propsInstructors, rawMentors ]);

    const [ activeInstructorSlide, setActiveInstructorSlide ] = useState(0);

    const prevInstructorSlide = useCallback(() => {
        setActiveInstructorSlide((prev) => Math.max(0, prev - 1));
    }, []);

    const nextInstructorSlide = useCallback(() => {
        setActiveInstructorSlide((prev) => Math.min(instructors.length - 1, prev + 1));
    }, [ instructors.length ]);

    return {
        instructors,
        activeInstructorSlide,
        setActiveInstructorSlide,
        prevInstructorSlide,
        nextInstructorSlide,
    };
};

export default useInstructorSection;
