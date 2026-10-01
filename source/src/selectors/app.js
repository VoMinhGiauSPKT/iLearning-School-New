import { createSelector } from 'reselect';

export const selectAppLoading = createSelector(
    (state) => state.app.appLoading,
    (appLoading) => appLoading > 0,
);

export const selectActionLoading = (type) =>
    createSelector(
        (state) => state.app[type],
        (loading) => loading,
    );

export const selectAppTheme = createSelector(
    (state) => state.app.theme,
    (theme) => theme,
);

export const selectAppLocale = createSelector(
    (state) => state.app.locale,
    (locale) => locale,
);

export const selectRestaurantId = createSelector(
    (state) => state.app.restaurantId,
    (restaurantId) => restaurantId,
);

export const selectCart = createSelector(
    (state) => state.cart.data,
    (cart) => cart,
);
export const selectListSubject = createSelector(
    (state) => state.app.listSubject,
    (listSubject) => listSubject,
);
export const selectListClassroom = createSelector(
    (state) => state.app.listClassroom,
    (listClassroom) => listClassroom,
);
export const selectClassroomSearch = createSelector(
    (state) => state.app.listClassroom,
    (list) => ({ 
        query: list.searchQuery, 
        isSearching: list.isSearching, 
    }),
);

export const selectSubjectSearch = createSelector(
    (state) => state.app.listSubject,
    (list) => ({ 
        query: list.searchQuery, 
        isSearching: list.isSearching, 
    }),
);

export const selectScrollPositions = createSelector(
    (state) => state.app.scrollPositions,
    (scrollPositions) => scrollPositions,
);

export const selectListCareerPath = createSelector(
    (state) => state.app.listCareerPath,
    (listCareerPath) => listCareerPath,
);

export const selectListRecommendedCareerPath = createSelector(
    (state) => state.app.listRecommendedCareerPath,
    (listRecommendedCareerPath) => listRecommendedCareerPath,
);

export const selectListPublicClassroom = createSelector(
    (state) => state.app.listPublicClassroom,
    (listPublicClassroom) => listPublicClassroom,
);

export const selectListPublicCareerPath = createSelector(
    (state) => state.app.listPublicCareerPath,
    (listPublicCareerPath) => listPublicCareerPath,
);

export const selectContactInfo = createSelector(
    (state) => state.app.contactInfo,
    (contactInfo) => contactInfo,
);
