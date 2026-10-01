import React, { useMemo } from 'react';
import { transformContent } from '@utils';

import styles from "./index.module.scss";

const TipTapViewer = ({ content, className = '' }) => {
    const html = useMemo(() => {
        return transformContent(content);
    }, [ content ]);

    if (!content) return null;

    return (
        <div
            className={`${styles.tiptapViewer} ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default TipTapViewer;