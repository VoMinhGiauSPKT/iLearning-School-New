import React from 'react';
import useDevices from '@hooks/useDevices';

import PartnerCalloutDesktop from './desktop/PartnerCalloutDesktop';
import PartnerCalloutMobile from './mobile/PartnerCalloutMobile';
import usePartnerCallout from './usePartnerCallout';

const PartnerCallout = ({ description: customDescription, forceDevice }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;
    const { description } = usePartnerCallout(customDescription);

    if (!description) return null;

    const title = description.title || '';
    const desc = description.description || '';

    if (!title && !desc) return null;

    if (isMobile) {
        return <PartnerCalloutMobile title={title} desc={desc} />;
    }

    return <PartnerCalloutDesktop title={title} desc={desc} />;
};

PartnerCallout.Desktop = PartnerCalloutDesktop;
PartnerCallout.Mobile = PartnerCalloutMobile;

export default PartnerCallout;
