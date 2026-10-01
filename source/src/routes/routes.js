import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from '@components/common/loading';
import PageNotFound from '@components/common/page/PageNotFound';
import useAuth from '@hooks/useAuth';

import ValidateAccess from './ValidateAccess';
import routes from '.';
const routesArray = Object.values(routes);

const AppRoutes = () => {
    const { isAuthenticated, loading: loadingProfile, profile } = useAuth();

    const renderRoute = (route) => {
        // TODO: handle render component by site config
        const component = route.component || PageNotFound;

        return (
            <Route
                key={route.path || 'not-found'}
                path={route.path}
                index={route.index}
                element={
                    loadingProfile ? (
                        <Loading show />
                    ) : (
                        <ValidateAccess
                            authRequire={route.auth}
                            component={component}
                            componentProps={route.componentProps}
                            isAuthenticated={isAuthenticated}
                            profile={profile}
                            title={route?.title}
                        />
                    )
                }
            />
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route>{routesArray.map(renderRoute)}</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
