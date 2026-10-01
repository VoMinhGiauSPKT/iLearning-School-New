import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { accessRouteTypeEnum, STATUS_LOCK } from '@constants';
import apiConfig from '@constants/apiConfig';
import useBrowserTabChange from '@hooks/useBrowserTabChange';
import useDevices from '@hooks/useDevices';
import useFetch from '@hooks/useFetch';
import { getCacheAccessToken, removeCacheToken } from '@services/userService';
import { accountActions, appActions } from '@store/actions';

import routes from '.';

const ValidateAccess = ({ authRequire, component: Component, componentProps, isAuthenticated, title }) => {
    const location = useLocation();
    const userAccessToken = getCacheAccessToken();
    const dispatch = useDispatch();
    const { isMobile } = useDevices();

    const { execute: executeGetProfile } = useFetch(apiConfig.account.getProfile, {
        immediate: false,
    });
    const onLogout = () => {
        removeCacheToken();
        dispatch(appActions.clearAppData());
        dispatch(accountActions.logout());
    };

    useEffect(() => {
        if (isMobile) {
            window.scrollTo(0, 0);
        }
    }, [ location?.pathname ]);


    useBrowserTabChange(
        () => { },
        () => {
            if (userAccessToken) {
                executeGetProfile({
                    onCompleted: ({ data }) => {
                        if (data?.status == STATUS_LOCK)
                            onLogout();
                    },
                    onError: (err) => {
                        if (err?.code == 'ERROR-ACCOUNT-0000')
                            onLogout();
                    },
                });
            }
        },
    );
    const getRedirect = (authRequire) => {
        if (authRequire === accessRouteTypeEnum.NOT_LOGIN && isAuthenticated) {
            return routes.homePage.path;
        }

        if (authRequire === accessRouteTypeEnum.REQUIRE_LOGIN && !isAuthenticated) {
            return routes.loginPage.path;
        }
        

        // check permistion

        return false;
    };

    const redirect = getRedirect(authRequire);

    if (redirect) {
        return <Navigate state={{ from: location }} key={redirect} to={redirect} replace />;
    }

    return (
        <Component {...(componentProps || {})}>
            <Outlet />
        </Component>
    );
};

export default ValidateAccess;
