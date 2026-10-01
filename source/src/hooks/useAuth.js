import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { USER_KIND_PUBLISHER, USER_KIND_READER } from '@constants';
import accountSelectors from '@selectors/account';
import { getCacheAccessToken, removeCacheToken } from '@services/userService';
import { accountActions } from '@store/actions';
import { jwtDecode } from 'jwt-decode';

import useActionLoading from './useActionLoading';
import useFetchAction from './useFetchAction';

const useAuth = () => {
    const profile = useSelector(accountSelectors.selectProfile);
    const token = getCacheAccessToken();
    let permissionCodes = [];
    if (token){
        try {
            const { authorities } = jwtDecode(token);
            permissionCodes = authorities?.length > 0 ? authorities.map(role => role.replace(/^ROLE_/, '')) : [];
        } catch (error) {
            // console.error('Token không hợp lệ', error);
        }
    }

    const immediateProfile = !!token && !profile;

    useFetchAction(accountActions.getProfile, { immediate: immediateProfile }, {
        onError: (err) => {
            if (err?.response?.data?.result === false) {
                const errCode = err?.response?.data?.code;
                if (errCode === 'ERROR-ACCOUNT-0000') {
                    removeCacheToken();
                }
            }
        },
    });
    const { loading: profileLoading  } = useActionLoading(accountActions.getProfile.type);

    const permissions = profile?.group?.permissions?.map((permission) => permission.action);
    // const permissionCodes = (profile?.permissions || profile?.group?.permissions)?.map((permission) => {
    //     return typeof permission === 'object' ? permission.pcode : permission;
    // });

    const kind = profile?.kind;
    const isPublisher = kind == USER_KIND_PUBLISHER;
    const isReader = useCallback(() => {
        if (kind === USER_KIND_READER) return true;
        return false;
    }, [ kind ]);

    return { 
        isAuthenticated: !!profile, 
        profile, 
        isPublisher,
        isReader,
        token, 
        loading: immediateProfile || profileLoading,
        permissions, 
        permissionCodes,
    };
};

export default useAuth;
