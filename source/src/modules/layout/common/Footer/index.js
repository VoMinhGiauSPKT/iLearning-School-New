import React from 'react';
import { brandName, fixedPath } from '@constants';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.copyright}>
                    &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
                </span>
                <div className={styles.links}>
                    <a className={styles.link} href={fixedPath.privacy} target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                    </a>
                    <a className={styles.link} href={fixedPath.help} target="_blank" rel="noopener noreferrer">
                        Help
                    </a>
                    <a className={styles.link} href={fixedPath.aboutUs} target="_blank" rel="noopener noreferrer">
                        About Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
