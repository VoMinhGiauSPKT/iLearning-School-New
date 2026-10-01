import React from 'react';
import { LuChevronDown, LuX } from 'react-icons/lu';

import styles from './MobileDrawer.module.scss';

const MobileDrawer = ({ isOpen, onClose, navLinks = [] }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.drawerOverlay} onClick={onClose}>
            <div
                className={styles.drawerContent}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <div className={styles.drawerHeader}>
                    <span className={styles.drawerTitle}>Menu</span>
                    <button
                        type="button"
                        className={styles.drawerCloseBtn}
                        onClick={onClose}
                        aria-label="Đóng menu"
                    >
                        <LuX size={24} />
                    </button>
                </div>

                <nav className={styles.drawerNav}>
                    <ul className={styles.drawerNavList}>
                        {navLinks.map((link, idx) => (
                            <li key={idx} className={styles.drawerNavItem}>
                                <a
                                    href={link.href}
                                    className={styles.drawerNavLink}
                                    onClick={onClose}
                                >
                                    <span>{link.label}</span>
                                    {link.hasDropdown && <LuChevronDown size={16} />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.drawerAuthGroup}>
                    <a href="/login" className={styles.drawerLoginLink}>
                        Log In
                    </a>
                    <button type="button" className={styles.drawerSignBtn}>
                        SIGN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileDrawer;
