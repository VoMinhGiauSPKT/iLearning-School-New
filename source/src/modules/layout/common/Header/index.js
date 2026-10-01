import React from 'react';
import useDevices from '@hooks/useDevices';
import HeaderDesktop from './desktop/HeaderDesktop';
import HeaderMobile from './mobile/HeaderMobile';
import useHeader, { defaultNavLinks } from './useHeader';

const HeaderMobileConnected = ({ navLinks = defaultNavLinks, ...props }) => {
    const headerLogic = useHeader({ navLinks });
    return (
        <HeaderMobile
            navLinks={headerLogic.navLinks}
            totalCount={headerLogic.totalCount}
            onToggleCart={headerLogic.handleToggleCart}
            mobileMenuOpen={headerLogic.mobileMenuOpen}
            onOpenMenu={headerLogic.handleOpenMenu}
            onCloseMenu={headerLogic.handleCloseMenu}
            {...props}
        />
    );
};

const HeaderDesktopConnected = ({ navLinks = defaultNavLinks, ...props }) => {
    const headerLogic = useHeader({ navLinks });
    return (
        <HeaderDesktop
            navLinks={headerLogic.navLinks}
            searchQuery={headerLogic.searchQuery}
            onSearchChange={headerLogic.handleSearchChange}
            totalCount={headerLogic.totalCount}
            onToggleCart={headerLogic.handleToggleCart}
            {...props}
        />
    );
};

const Header = ({ navLinks = defaultNavLinks, forceDevice, ...props }) => {
    const { isMobile: detectedIsMobile } = useDevices();
    const isMobile = forceDevice ? forceDevice === 'mobile' : detectedIsMobile;

    if (isMobile) {
        return <HeaderMobileConnected navLinks={navLinks} {...props} />;
    }

    return <HeaderDesktopConnected navLinks={navLinks} {...props} />;
};

Header.Desktop = HeaderDesktopConnected;
Header.Mobile = HeaderMobileConnected;

export {
    HeaderDesktop,
    HeaderMobile,
    HeaderDesktopConnected,
    HeaderMobileConnected,
    useHeader,
    defaultNavLinks,
};
export default Header;
