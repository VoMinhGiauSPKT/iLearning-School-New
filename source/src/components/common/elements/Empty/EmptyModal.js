import React from 'react';
import { FormattedMessage } from 'react-intl';
import noData from '@assets/images/no-data.png';

import styles from './index.module.scss';

const EmptyModal = ({ title }) => {
    return (
        <div className={styles.emptyModalContainer}>
            <img alt="no-data" src={noData} width={100} height={100} />
            <div className={styles.text}>
                {title || <FormattedMessage
                    defaultMessage="Không có dữ liệu"
                    description="Thông báo không có dữ liệu cho modal"
                    id="components.Common.Empty.Empty.message"
                />}
            </div>
        </div>
    );
};

export default EmptyModal;