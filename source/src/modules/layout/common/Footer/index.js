import React from 'react';
import useDevices from '@hooks/useDevices';

import FooterDesktop from './desktop/FooterDesktop';
import FooterMobile from './mobile/FooterMobile';
import useFooter from './useFooter';

const FooterMobileConnected = (props) => {
    const footerData = useFooter();
    return <FooterMobile {...footerData} {...props} />;
};

const FooterDesktopConnected = (props) => {
    const footerData = useFooter();
    return <FooterDesktop {...footerData} {...props} />;
};

const Footer = ({ forceDevice, ...props }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;
    const footerData = useFooter();

    if (isMobile) {
        return <FooterMobile {...footerData} {...props} />;
    }

    return <FooterDesktop {...footerData} {...props} />;
};

Footer.Desktop = FooterDesktopConnected;
Footer.Mobile = FooterMobileConnected;

export {
    FooterDesktop,
    FooterMobile,
    FooterDesktopConnected,
    FooterMobileConnected,
    useFooter,
};
export default Footer;
