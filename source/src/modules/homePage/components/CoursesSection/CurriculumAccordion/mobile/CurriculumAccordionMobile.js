import React, { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

import styles from './CurriculumAccordionMobile.module.scss';

const CurriculumAccordionMobile = ({ stages = [], onRegister }) => {
    // Stage 2 is expanded by default to match screenshot
    const [ openStages, setOpenStages ] = useState({ 2: true });

    const toggleStage = (stageId) => {
        setOpenStages((prev) => ({
            ...prev,
            [stageId]: !prev[stageId],
        }));
    };

    return (
        <div className={styles.curriculumContainer}>
            <h3 className={styles.curriculumHeading}>Giáo trình</h3>
            <div className={styles.stagesList}>
                {stages.map((stage) => {
                    const isOpen = !!openStages[stage.id];
                    return (
                        <div key={stage.id} className={styles.stageCard}>
                            <button
                                type="button"
                                className={styles.stageHeaderBtn}
                                onClick={() => toggleStage(stage.id)}
                                aria-expanded={isOpen}
                            >
                                <span className={styles.stageTitle}>{stage.title}</span>
                                <div className={styles.toggleIcon}>
                                    {isOpen ? <LuMinus size={18} /> : <LuPlus size={18} />}
                                </div>
                            </button>
                            {isOpen && (
                                <div className={styles.stageBody}>
                                    <ul className={styles.lessonList}>
                                        {stage.lessons.map((lesson, idx) => (
                                            <li key={idx} className={styles.lessonItem}>
                                                <span>- {lesson.replace(/^-\s*/, '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {onRegister && (
                <div className={styles.curriculumActionWrap}>
                    <button
                        type="button"
                        className={styles.registerBtn}
                        onClick={onRegister}
                    >
                        Đăng ký ngay
                    </button>
                </div>
            )}
        </div>
    );
};

export default CurriculumAccordionMobile;
