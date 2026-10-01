import { defineMessage, useIntl } from 'react-intl';
//import { notification } from 'antd';

export default function useNotification({ placement = 'topRight', duration = 2 } = {}) {
    const intl = useIntl();

    return ({ type = 'success', message, title, onClose }) => {
        // notification[type]({
        //     message: title || intl.formatMessage(messages.message[type]),
        //     description: message,
        //     placement,
        //     duration,
        //     onClose,
        // });
    };
}
