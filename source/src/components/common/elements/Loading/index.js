import React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

const Loading = ({ show }) => {
    if (!show) return null;
    
    return (
        <div className={classNames(styles.loadingContainer)}>
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;