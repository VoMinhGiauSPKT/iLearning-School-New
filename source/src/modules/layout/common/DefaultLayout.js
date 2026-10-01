import React from 'react';
import CartDrawer from '@components/common/elements/CartDrawer';

import Header from './Header';

import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            {/* <Footer /> */}
            <CartDrawer />
        </div>
    );
};

export default DefaultLayout;
