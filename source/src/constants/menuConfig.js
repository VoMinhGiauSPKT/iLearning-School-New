import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Colection } from '@assets/icons/colection.svg';
import { ReactComponent as Order } from '@assets/icons/order.svg';
import { ReactComponent as Password } from '@assets/icons/password.svg';
import { ReactComponent as Rating } from '@assets/icons/rating.svg';
import { ReactComponent as User } from '@assets/icons/User.svg';

const getNavMenuConfig = (restaurantId) => [
    {
        label: <FormattedMessage defaultMessage="Profile" />,
        key: 'info',
        icon: <User height={30} />,
        children: [],
        link: `/${restaurantId}/profile`,
    },
    {
        label: <FormattedMessage defaultMessage="Change Password" />,
        key: 'change',
        children: [],
        icon: <Password height={30} style={{ marginLeft: '-2px' }} />,
        link: `/${restaurantId}/change-password-profile`,
    },
];

export default getNavMenuConfig;
