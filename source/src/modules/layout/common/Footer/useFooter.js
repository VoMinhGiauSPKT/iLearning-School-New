import { useMemo } from 'react';
import { brandName, fixedPath } from '@constants';

export const useFooter = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    const footerLinks = useMemo(
        () => [
            { label: 'Privacy Policy', href: fixedPath.privacy },
            { label: 'Help', href: fixedPath.help },
            { label: 'About Us', href: fixedPath.aboutUs },
        ],
        [],
    );

    return {
        brandName,
        currentYear,
        footerLinks,
    };
};

export default useFooter;
