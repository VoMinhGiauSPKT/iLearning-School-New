import React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import QuoteIcon from '@components/common/elements/QuoteIcon';
import SectionHeading from '@components/common/elements/SectionHeading';

import useInstructorSection from './useInstructorSection';

import styles from './InstructorSection.module.scss';

const InstructorSection = (props) => {
    const hookData = useInstructorSection(props.instructors);

    const instructors = props.instructors || hookData.instructors;
    const activeInstructorSlide = props.activeInstructorSlide !== undefined ? props.activeInstructorSlide : hookData.activeInstructorSlide;
    const setActiveInstructorSlide = props.setActiveInstructorSlide || hookData.setActiveInstructorSlide;
    const prevInstructorSlide = props.prevInstructorSlide || hookData.prevInstructorSlide;
    const nextInstructorSlide = props.nextInstructorSlide || hookData.nextInstructorSlide;

    if (!instructors || instructors.length === 0) return null;

    const currentInstructor = instructors[activeInstructorSlide] || instructors[0];
    const isFirstInstructor = activeInstructorSlide === 0;
    const isLastInstructor = activeInstructorSlide === instructors.length - 1;

    return (
        <section className={styles.instructorSection} id="instructors">
            <SectionHeading
                subtitle="Nhân sự nòng cốt"
                title="Đội ngũ giảng viên"
                align="center"
            />
            <div className={styles.instructorMainCard}>
                <div
                    className={styles.instructorPhotoBox}
                    style={
                        currentInstructor.avatar
                            ? { backgroundImage: `url(${currentInstructor.avatar})` }
                            : undefined
                    }
                />
                <div className={styles.instructorInfoBox}>
                    <QuoteIcon color="#FFFFFF" width={36} height={28} />
                    <div className={styles.instructorQuoteWrap}>
                        {currentInstructor.quotePara1 && (
                            <p className={styles.quotePara}>{currentInstructor.quotePara1}</p>
                        )}
                        {currentInstructor.quotePara2 && (
                            <p className={styles.quotePara}>{currentInstructor.quotePara2}</p>
                        )}
                    </div>
                    <div className={styles.instructorIdentity}>
                        <h4 className={styles.instructorName}>{currentInstructor.name}</h4>
                        <span className={styles.instructorRole}>{currentInstructor.role}</span>
                    </div>
                </div>

                {/* Dots Pagination - Bottom Center */}
                <div className={styles.sliderDots}>
                    {instructors.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`${styles.dot} ${activeInstructorSlide === idx ? styles.active : ''}`}
                            onClick={() => setActiveInstructorSlide && setActiveInstructorSlide(idx)}
                            aria-label={`Giảng viên ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows - Bottom Right */}
                <div className={styles.sliderArrows}>
                    <button
                        type="button"
                        className={styles.prevBtn}
                        onClick={prevInstructorSlide}
                        disabled={isFirstInstructor}
                        aria-label="Giảng viên trước"
                    >
                        <LuChevronLeft size={28} />
                    </button>
                    <button
                        type="button"
                        className={styles.nextBtn}
                        onClick={nextInstructorSlide}
                        disabled={isLastInstructor}
                        aria-label="Giảng viên tiếp theo"
                    >
                        <LuChevronRight size={28} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
