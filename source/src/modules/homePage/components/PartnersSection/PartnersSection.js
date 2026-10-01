import React from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import SectionHeading from '@components/common/elements/SectionHeading';

import usePartnersSection from './usePartnersSection';

import styles from './PartnersSection.module.scss';

const PartnersSection = (props) => {
    const hookData = usePartnersSection(props.partners);

    const visiblePartners = props.visiblePartners || hookData.visiblePartners;
    const hasPartnerNavigation = props.hasPartnerNavigation !== undefined ? props.hasPartnerNavigation : hookData.hasPartnerNavigation;
    const handlePrevPartner = props.handlePrevPartner || hookData.handlePrevPartner;
    const handleNextPartner = props.handleNextPartner || hookData.handleNextPartner;

    if (!visiblePartners || visiblePartners.length === 0) return null;

    return (
        <section className={styles.partnersSection} id="partners">
            <SectionHeading
                subtitle="Khách hàng và"
                title="Đối tác của UI8"
                align="center"
            />
            <div className={styles.partnersCardBanner}>
                <button
                    type="button"
                    className={`${styles.partnerNavBtn} ${styles.navBtnLeft}`}
                    onClick={handlePrevPartner}
                    disabled={!hasPartnerNavigation}
                    aria-label="Đối tác trước"
                >
                    <LuArrowLeft size={24} />
                </button>

                <div className={styles.partnersLogosWrap}>
                    {visiblePartners.map((partner, idx) => (
                        <div key={`${partner.id}-${idx}`} className={styles.partnerItem} title={partner.name}>
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={styles.partnerLogoImg}
                                />
                            ) : (
                                <span className={styles.partnerFallbackText}>{partner.name}</span>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className={`${styles.partnerNavBtn} ${styles.navBtnRight}`}
                    onClick={handleNextPartner}
                    disabled={!hasPartnerNavigation}
                    aria-label="Đối tác tiếp theo"
                >
                    <LuArrowRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default PartnersSection;
