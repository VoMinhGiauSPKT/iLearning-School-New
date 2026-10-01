import React from 'react';
import styles from './PartnerCalloutDesktop.module.scss';

const PartnerCalloutDesktop = ({ title, desc }) => {
    if (!title && !desc) return null;

    return (
        <section className={styles.partnerCalloutSection}>
            <div className={styles.calloutBox}>
                <div className={styles.calloutInner}>
                    {title && <h2 className={styles.calloutTitle}>{title}</h2>}
                    {desc && <p className={styles.calloutDesc}>{desc}</p>}
                </div>
            </div>
        </section>
    );
};

export default PartnerCalloutDesktop;
