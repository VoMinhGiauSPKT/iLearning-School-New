import React from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import { ReactComponent as LogoMarkIcon } from '@assets/icons/logo-mark.svg';

import MobileDrawer from './MobileDrawer';
import styles from './HeaderMobile.module.scss';

const HeaderMobile = ({
    navLinks = [],
    totalCount = 0,
    onToggleCart,
    mobileMenuOpen = false,
    onOpenMenu,
    onCloseMenu,
}) => {
    return (
        <>
            <header className={styles.header}>
                <a href="#" className={styles.logo}>
                    <LogoMarkIcon className={styles.logoIcon} />
                    <div className={styles.logoText}>
                        <span>ilearning</span>
                        <span>School</span>
                    </div>
                </a>

                <div className={styles.actions}>
                    <button type="button" className={styles.consultBtn}>
                        Liên hệ tư vấn
                    </button>

                    <button
                        type="button"
                        className={styles.cartBtn}
                        onClick={onToggleCart}
                        aria-label={`Giỏ hàng có ${totalCount} khóa học`}
                        title="Xem giỏ hàng"
                    >
                        <LuShoppingBag size={18} />
                        {totalCount > 0 && <span className={styles.cartBadge}>{totalCount}</span>}
                    </button>

                    <button
                        type="button"
                        className={styles.menuBtn}
                        onClick={onOpenMenu}
                        aria-label="Mở menu"
                    >
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="2.5" rx="1.25" fill="white" />
                            <rect y="6.25" width="20" height="2.5" rx="1.25" fill="white" />
                            <rect y="12.5" width="20" height="2.5" rx="1.25" fill="white" />
                        </svg>
                    </button>
                </div>
            </header>

            <MobileDrawer
                isOpen={mobileMenuOpen}
                onClose={onCloseMenu}
                navLinks={navLinks}
            />
        </>
    );
};

export default HeaderMobile;
