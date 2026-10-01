import React from 'react';
import QuoteIcon from '@components/common/elements/QuoteIcon';
import SectionHeading from '@components/common/elements/SectionHeading';

import useTestimonials from './useTestimonials';

import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = ({ testimonials: customTestimonials }) => {
    const { testimonials } = useTestimonials(customTestimonials);
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className={styles.testimonialsSection} id="testimonials">
            <SectionHeading
                subtitle="Cảm nhận của học viên"
                title="Mọi người nói gì về UI8"
                align="center"
            />
            <div className={styles.testimonialsGrid}>
                {testimonials.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className={styles.testimonialCard}>
                        <div className={styles.cardTopContent}>
                            <QuoteIcon color="#FFFFFF" width={36} height={28} />
                            <p className={styles.testimonialText}>{item.quote}</p>
                        </div>
                        <div className={styles.testimonialAuthorWrap}>
                            <div className={styles.authorAvatarPlaceholder} />
                            <div className={styles.authorInfo}>
                                <span className={styles.authorName}>{item.author}</span>
                                <span className={styles.authorLocation}>{item.batch}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
