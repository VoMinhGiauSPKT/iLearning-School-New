import React from 'react';
import { enableMobile } from '@constants';
import useDevices from '@hooks/useDevices';
import DefaultLayout from '@modules/layout/common/DefaultLayout';
import DefaultMobileLayout from '@modules/layout/common/DefaultMobileLayout';

import PageNotFound from '../page/PageNotFound';

const RenderContext = ({ layout, components, layoutProps, title, ...props }) => {
    const { isMobile } = useDevices();
    const ComponentLayout =
        isMobile && enableMobile
            ? DefaultMobileLayout
            : layout?.defaultTheme || DefaultLayout;
    const ComponentRender =
        (isMobile && enableMobile ? components?.mobile?.defaultTheme : components?.desktop?.defaultTheme) ||
        PageNotFound;
    return (
        <ComponentLayout layoutProps={layoutProps} title={title}>
            <ComponentRender {...props} />
        </ComponentLayout>
    );
};

export default RenderContext;
