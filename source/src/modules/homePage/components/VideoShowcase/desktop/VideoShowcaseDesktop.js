import React from 'react';
import styles from './VideoShowcaseDesktop.module.scss';

const VideoShowcaseDesktop = ({ embedUrl }) => {
    if (!embedUrl) return null;

    return (
        <section className={styles.videoShowcaseSection} id="video-showcase">
            <div className={styles.videoContainer}>
                <iframe
                    key={embedUrl}
                    src={embedUrl}
                    title="Video giới thiệu khóa học thực tế"
                    className={styles.youtubeIframe}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default VideoShowcaseDesktop;
