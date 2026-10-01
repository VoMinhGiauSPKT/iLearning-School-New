import React from 'react';
import SectionHeading from '@components/common/elements/SectionHeading';

import CourseCard from './CourseCard';
import CurriculumAccordion from './CurriculumAccordion';
import useCoursesSection from './useCoursesSection';
import styles from './CoursesSection.module.scss';

const CoursesSection = (props) => {
    const hookData = useCoursesSection(props.courses);

    const courses = props.courses || hookData.courses;
    const expandedCourseIds = props.expandedCourseIds !== undefined ? props.expandedCourseIds : hookData.expandedCourseIds;
    const toggleCourse = props.toggleCourse || hookData.toggleCourse;
    const onAddToCart = props.onAddToCart || hookData.handleAddToCart;

    return (
        <section className={styles.coursesSection} id="courses">
            <SectionHeading
                subtitle="Trải nghiệm dự án thực tế cùng UI8"
                title="Các khoá học sắp khai giảng"
                align="center"
            />

            <div className={styles.coursesList}>
                {courses.map((course) => {
                    const isExpanded = !!expandedCourseIds[course.id];
                    return (
                        <div key={course.id} className={styles.courseListItem}>
                            <CourseCard
                                course={course}
                                isExpanded={isExpanded}
                                onToggleExpand={() => toggleCourse && toggleCourse(course.id)}
                                onAddToCart={onAddToCart}
                            />
                            {isExpanded && (
                                <CurriculumAccordion
                                    stages={course.curriculumStages}
                                    onRegister={() => onAddToCart && onAddToCart(course)}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={styles.allCoursesAction}>
                <button type="button" className={styles.allCoursesBtn}>
                    Tất cả khoá học
                </button>
            </div>
        </section>
    );
};

export default CoursesSection;
