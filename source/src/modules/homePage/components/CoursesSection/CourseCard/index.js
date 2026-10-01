import React from 'react';
import useDevices from '@hooks/useDevices';

import CourseCardDesktop from './desktop/CourseCardDesktop';
import CourseCardMobile from './mobile/CourseCardMobile';

const CourseCard = ({ forceDevice, ...props }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;

    if (isMobile) {
        return <CourseCardMobile {...props} />;
    }

    return <CourseCardDesktop {...props} />;
};

CourseCard.Desktop = CourseCardDesktop;
CourseCard.Mobile = CourseCardMobile;

export default CourseCard;
