import React from 'react';
import CartDrawer from '@components/common/elements/CartDrawer';

import Header from './Header';
import MobileFooter from './MobileFooter';

import styles from './DefaultMobileLayout.module.scss';

const DefaultMobileLayout = ({ children, layoutProps }) => {
    return (
        <div className={styles.layout}>
            {!layoutProps?.hideHeader && <Header.Mobile />}
            <main className={styles.main}>{children}</main>
            <MobileFooter />
            <CartDrawer />
        </div>
    );
};

export default DefaultMobileLayout;
