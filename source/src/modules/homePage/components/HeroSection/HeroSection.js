import React from 'react';

import useHeroSection from './useHeroSection';

import styles from './HeroSection.module.scss';

const HeroSection = (props) => {
    const hookData = useHeroSection(props.settings);
    const activeHeroSlide = props.activeHeroSlide !== undefined ? props.activeHeroSlide : hookData.activeHeroSlide;
    const onHeroIndicatorClick = props.onHeroIndicatorClick || hookData.handleHeroIndicatorClick;
    const sliderList = props.settings?.slider || hookData.sliderList;

    if (!sliderList || sliderList.length === 0) return null;

    const currentHero = sliderList[activeHeroSlide] || sliderList[0];
    const totalSlides = sliderList.length;

    return (
        <section className={styles.heroSection}>
            <div
                className={styles.heroBanner}
                style={{
                    backgroundImage: `
                        linear-gradient(0deg, rgba(24, 32, 41, 0.6), rgba(24, 32, 41, 0.6)),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 81.32%),
                        url("${currentHero.image}")
                    `,
                }}
            >
                <div className={styles.heroContent} key={currentHero.id || activeHeroSlide}>
                    <h1 className={styles.heroTitle}>{currentHero.title}</h1>
                    <p className={styles.heroSubtitle}>{currentHero.description}</p>
                    {currentHero.url && (
                        <div>
                            <a
                                href={currentHero.url}
                                target={currentHero.url.startsWith('http') ? '_blank' : undefined}
                                rel={currentHero.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                style={{ textDecoration: 'none' }}
                            >
                                <button type="button" className={styles.heroRegisterBtn}>
                                    Đăng ký ngay
                                </button>
                            </a>
                        </div>
                    )}
                </div>

                {totalSlides > 1 && (
                    <div
                        className={styles.sliderIndicator}
                        onClick={onHeroIndicatorClick}
                        title="Nhấp để chuyển slide"
                    >
                        <div className={styles.indicatorTrack}>
                            <div
                                className={styles.indicatorFill}
                                style={{
                                    width: `${100 / totalSlides}%`,
                                    transform: `translateX(${activeHeroSlide * 100}%)`,
                                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
