import React from 'react';
import { LuChevronDown, LuShoppingBag } from 'react-icons/lu';

import styles from './CourseCardDesktop.module.scss';

const CourseCardDesktop = ({
    course,
    isExpanded,
    onToggleExpand,
    onAddToCart,
}) => {
    if (!course) return null;

    return (
        <div className={styles.courseCard}>
            <div className={styles.cardMedia}>
                <img src={course.thumbnail} alt={course.title} />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <div className={styles.coursePrice}>{course.price}</div>
                <ul className={styles.benefitsList}>
                    {course.benefits.map((benefit, idx) => (
                        <li key={idx} className={styles.benefitItem}>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={styles.triangleIcon}
                            >
                                <path d="M14 9L5 14.1962L5 3.80385L14 9Z" fill="#15CCA3" />
                            </svg>
                            <span className={styles.benefitText}>{benefit}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.cardFooterAction}>
                    <button
                        type="button"
                        className={styles.addToCartBtn}
                        onClick={() => onAddToCart && onAddToCart(course)}
                    >
                        <LuShoppingBag size={22} />
                        <span>Thêm vào giỏ</span>
                    </button>
                    <button
                        type="button"
                        className={styles.seeMoreBtn}
                        onClick={onToggleExpand}
                        aria-expanded={isExpanded}
                    >
                        <span className={styles.seeMoreText}>
                            {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                        <LuChevronDown
                            size={24}
                            className={`${styles.seeMoreArrow} ${isExpanded ? styles.rotated : ''}`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCardDesktop;
