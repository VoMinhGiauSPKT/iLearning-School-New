import React from 'react';
import useDevices from '@hooks/useDevices';
import { getYoutubeEmbedUrl } from '@utils/video';

import VideoShowcaseDesktop from './desktop/VideoShowcaseDesktop';
import VideoShowcaseMobile from './mobile/VideoShowcaseMobile';
import useVideoShowcase from './useVideoShowcase';

const VideoShowcase = ({ videoUrl: customVideoUrl, forceDevice }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;
    const { videoUrl } = useVideoShowcase(customVideoUrl);

    if (!videoUrl) return null;

    const embedUrl = getYoutubeEmbedUrl(videoUrl, false);
    if (!embedUrl) return null;

    if (isMobile) {
        return <VideoShowcaseMobile embedUrl={embedUrl} />;
    }

    return <VideoShowcaseDesktop embedUrl={embedUrl} />;
};

VideoShowcase.Desktop = VideoShowcaseDesktop;
VideoShowcase.Mobile = VideoShowcaseMobile;

export default VideoShowcase;
