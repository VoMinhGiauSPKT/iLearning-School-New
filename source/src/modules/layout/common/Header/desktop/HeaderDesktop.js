import React from 'react';
import { LuChevronDown, LuSearch, LuShoppingBag } from 'react-icons/lu';
import logoSvg from '@assets/images/ilearning/logo/logo.svg';

import styles from './HeaderDesktop.module.scss';

const HeaderDesktop = ({
    navLinks = [],
    searchQuery = '',
    onSearchChange,
    totalCount = 0,
    onToggleCart,
}) => {
    return (
        <header className={styles.desktopSiteHeader}>
            <div className={styles.headerContainer}>
                {/* Left: Brand Logo & Search Box */}
                <div className={styles.headerLeft}>
                    <a href="#" className={styles.brandLogo}>
                        <img src={logoSvg} alt="iLearning School Logo" className={styles.brandLogoImg} />
                        <div className={styles.logoText}>
                            <span className={styles.logoMain}>iLearning</span>
                            <span className={styles.logoSub}>School</span>
                        </div>
                    </a>

                    <div className={styles.headerSearch}>
                        <LuSearch size={23} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm khoá học, bài viết, video..."
                            value={searchQuery}
                            onChange={onSearchChange}
                        />
                    </div>
                </div>

                {/* Right: Desktop Navigation, Divider, Log In, SIGN, Cart */}
                <div className={styles.headerRight}>
                    <nav className={styles.desktopNav}>
                        <ul className={styles.navList}>
                            {navLinks.map((link, idx) => (
                                <li key={idx} className={styles.navItem}>
                                    <a href={link.href} className={styles.navLink}>
                                        {link.label}
                                        {link.hasDropdown && <LuChevronDown size={18} className={styles.dropdownArrow} />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <span className={styles.headerDivider} aria-hidden="true" />

                    <div className={styles.headerAuthGroup}>
                        <a href="/login" className={styles.loginLink}>
                            Log In
                        </a>
                        <button type="button" className={styles.signBtn}>
                            SIGN
                        </button>
                        <button
                            type="button"
                            className={styles.headerCartBtn}
                            onClick={onToggleCart}
                            aria-label={`Giỏ hàng có ${totalCount} khóa học`}
                            title="Xem giỏ hàng"
                        >
                            <LuShoppingBag size={22} />
                            {totalCount > 0 && <span className={styles.cartBadge}>{totalCount}</span>}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDesktop;
