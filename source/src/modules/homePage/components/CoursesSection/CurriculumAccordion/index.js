import React from 'react';
import useDevices from '@hooks/useDevices';

import CurriculumAccordionDesktop from './desktop/CurriculumAccordionDesktop';
import CurriculumAccordionMobile from './mobile/CurriculumAccordionMobile';

const CurriculumAccordion = ({ forceDevice, ...props }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;

    if (isMobile) {
        return <CurriculumAccordionMobile {...props} />;
    }

    return <CurriculumAccordionDesktop {...props} />;
};

CurriculumAccordion.Desktop = CurriculumAccordionDesktop;
CurriculumAccordion.Mobile = CurriculumAccordionMobile;

export default CurriculumAccordion;
