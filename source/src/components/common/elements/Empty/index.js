import React from 'react';
import { FormattedMessage } from 'react-intl';
import noData from '@assets/images/no-data.png';

import styles from './index.module.scss';
const EmptyMobile = ({ title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img alt="no-data" src={noData} width={80} height={80} />
                <div className={styles.text}>
                    {title || <FormattedMessage
                        defaultMessage="Không có dữ liệu"
                        description=""
                        id="components.Common.Empty.Empty.message"
                    />}
                </div>
            </div>
        </div>
    );
};

export default EmptyMobile;
