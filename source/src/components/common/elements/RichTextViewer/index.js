import React from 'react';
import { AppConstants } from '@constants';

import styles from './index.module.scss';

const RichTextViewer = ({ content, style }) => {
    const html = insertBaseURL(content || '');

    return (
        <div
            className={styles.richTextViewer}
            style={style}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default RichTextViewer;

export const insertBaseURL = (data) => {
    const imgArray = data?.replaceAll('{{baseURL}}', `${AppConstants.contentRootUrl}`);

    return imgArray;
};