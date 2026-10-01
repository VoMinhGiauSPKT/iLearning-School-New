import React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

const SectionHeading = ({ subtitle, title, align = 'center', className }) => {
    return (
        <div
            className={classNames(
                styles.sectionHeading,
                align === 'center' ? styles.alignCenter : styles.alignLeft,
                className,
            )}
        >
            {subtitle && <span className={styles.sectionSubtitle}>{subtitle}</span>}
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        </div>
    );
};

export default SectionHeading;
