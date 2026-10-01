import { setupApi } from '@itz/react-core';

import { getCacheAccessToken, removeCacheToken } from './userService';
const EXCLUDED_URLS = [ '/login' ];

export const { axiosInstance, sendRequest, config } = setupApi({
    getAccessToken: () => getCacheAccessToken(),
    loginUrls: EXCLUDED_URLS,
    onUnauthorized: () => {
        removeCacheToken();
        window.location.href = '/login';
    },
});