import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import { cartActions } from '@store/actions';
import { adaptCourses } from '@utils/ilearningAdapters';
import { toast } from 'sonner';

import { FALLBACK_COURSES } from './constants';

export const useCoursesSection = (propsCourses) => {
    const dispatch = useDispatch();

    const { data: rawCourses } = useFetch(apiConfig.classRoom.getPublicList, {
        immediate: !propsCourses,
    });

    const courses = useMemo(() => {
        if (propsCourses && propsCourses.length > 0) return propsCourses;
        const adapted = adaptCourses(rawCourses);
        return adapted.length > 0 ? adapted : FALLBACK_COURSES;
    }, [ propsCourses, rawCourses ]);

    const [ expandedCourseIds, setExpandedCourseIds ] = useState({ 'course-1': true });

    const toggleCourse = useCallback((courseId) => {
        setExpandedCourseIds((prev) => ({
            ...prev,
            [courseId]: !prev[courseId],
        }));
    }, []);

    const handleAddToCart = useCallback(
        (course) => {
            if (!course) return;
            dispatch(
                cartActions.addToCart({
                    id: course.id,
                    title: course.title,
                    price: course.price,
                    numericPrice: course.numericPrice,
                    thumbnail: course.thumbnail,
                }),
            );
            toast.success(`Đã thêm "${course.title}" vào giỏ hàng!`);
        },
        [ dispatch ],
    );

    return {
        courses,
        expandedCourseIds,
        toggleCourse,
        handleAddToCart,
    };
};

export default useCoursesSection;
