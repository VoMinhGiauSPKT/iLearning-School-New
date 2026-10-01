import { apiSsoUrl, apiUrl, AppConstants } from '.';

const baseHeader = {
    'Content-Type': 'application/json',
};

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
};

const apiConfig = {
    account: {
        loginBasic: {
            baseURL: `${apiSsoUrl}api/token`,
            method: 'POST',
            headers: baseHeader,
        },
        login: {
            baseURL: `${apiUrl}v1/account/login`,
            method: 'POST',
            headers: baseHeader,
        },
        logout: {
            baseURL: `${apiUrl}v1/account/logout`,
            method: 'GET',
            headers: baseHeader,
        },
        getProfile: {
            baseURL: `${apiUrl}v1/account/profile`,
            method: 'GET',
            headers: baseHeader,
        },
        updateProfile: {
            baseURL: `${apiUrl}v1/account/update_admin`,
            method: 'PUT',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/account/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        requestForgetPassword: {
            baseURL: `${apiUrl}v1/account/request-forget-password`,
            method: 'POST',
            headers: baseHeader,
        },
        forgetPassword: {
            baseURL: `${apiUrl}v1/account/forget-password`,
            method: 'POST',
            headers: baseHeader,
        },
        updateUserProfile: {
            baseURL: `${apiUrl}v1/account/update-profile`,
            method: 'PUT',
            headers: baseHeader,
        },
        changePassword: {
            baseURL: `${apiUrl}v1/account/change-password`,
            method: 'PUT',
            headers: baseHeader,
        },
    },
    
    file: {
        download_video_resource: {
            path: `${AppConstants.mediaRootUrl}v1/file/download-video-resource`,
            method: 'GET',
            headers: multipartFormHeader,
        },
        upload_video: {
            path: `${AppConstants.mediaRootUrl}v1/file/upload-video`,
            method: 'POST',
            headers: multipartFormHeader,
            permissionCode: 'FILE_U_V',
        },
        upload: {
            baseURL: `${AppConstants.mediaRootUrl}v1/file/upload`,
            method: 'POST',
            headers: multipartFormHeader,
            // permissionCode: 'FILE_U',
        },
        image: {
            path: `${AppConstants.mediaRootUrl}admin/v1/image/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
        video: {
            path: `${AppConstants.mediaRootUrl}admin/v1/video/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
        download: {
            baseURL: `${apiUrl}v1/file/download`,
            method: 'GET',
        },
    },

    setting: {
        getPublic: {
            baseURL: `${apiUrl}v1/setting/public`,
            method: 'GET',
            headers: baseHeader,
        },
    },

    classRoom: {
        getPublicList: {
            baseURL: `${apiUrl}v1/class-room/public/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getPublicDetail: {
            baseURL: `${apiUrl}v1/class-room/public/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
    },

    mentor: {
        getPublicList: {
            baseURL: `${apiUrl}v1/mentor/public/list`,
            method: 'GET',
            headers: baseHeader,
        },
    },

    company: {
        getPublicList: {
            baseURL: `${apiUrl}v1/company/public/list`,
            method: 'GET',
            headers: baseHeader,
        },
    },
};

export default apiConfig;
