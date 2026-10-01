import React from 'react';
import CartDrawer from '@components/common/elements/CartDrawer';

import Footer from './Footer';
import Header from './Header';

import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children, layoutProps }) => {
    return (
        <div className={styles.layout}>
            {!layoutProps?.hideHeader && <Header />}
            <main className={styles.main}>{children}</main>
            {!layoutProps?.hideFooter && <Footer />}
            <CartDrawer />
        </div>
    );
};

export default DefaultLayout;
