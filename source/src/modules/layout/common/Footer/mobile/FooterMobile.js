import React from 'react';
import styles from './FooterMobile.module.scss';

const FooterMobile = ({ brandName, currentYear, footerLinks = [] }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.copyright}>
                    &copy; {currentYear} {brandName}. All rights reserved.
                </span>
                <div className={styles.links}>
                    {footerLinks.map((link, idx) => (
                        <a
                            key={idx}
                            className={styles.link}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterMobile;
