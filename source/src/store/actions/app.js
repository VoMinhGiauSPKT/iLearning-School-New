import { createAction } from '@store/utils';

export const showAppLoading = createAction('app/SHOW_LOADING');
export const hideAppLoading = createAction('app/HIDE_LOADING');
export const toggleActionLoading = createAction('app/ACTION_LOADING');
export const changeLanguage = createAction('app/CHANGE_LANGUAGE');
export const uploadFile = createAction('app/UPLOAD_FILE');

export const showCollapse = createAction('app/SHOW_COLLAPSE');
export const hideCollapse = createAction('app/HIDE_COLLAPSE');
export const showAppCartModal = createAction('app/SHOW_CART_MODAL');
export const hideAppCartModal = createAction('app/HIDE_CART_MODAL');
export const setRestaurantId = createAction('app/SET_RESTAURANT_ID');

export const setSubjectList = createAction('app/SET_SUBJECT_LIST');
export const appendSubjectList = createAction('app/APPEND_SUBJECT_LIST');
export const setSearchQuerySubject = createAction('app/SET_SEARCH_QUERY_SUBJECT');
export const setIsSearchingSubject = createAction('app/SET_IS_SEARCHING_SUBJECT');

export const setClassroomList = createAction('app/SET_CLASSROOM_LIST');
export const appendClassroomList = createAction('app/APPEND_CLASSROOM_LIST');
export const setSearchQueryClassroom = createAction('app/SET_SEARCH_QUERY_CLASSROOM');
export const setIsSearchingClassroom = createAction('app/SET_IS_SEARCHING_CLASSROOM');

export const setCareerPathList = createAction('app/SET_CAREER_PATH_LIST');
export const appendCareerPathList = createAction('app/APPEND_CAREER_PATH_LIST');
export const setRecommendedCareerPathList = createAction('app/SET_RECOMMENDED_CAREER_PATH_LIST');
export const appendRecommendedCareerPathList = createAction('app/APPEND_RECOMMENDED_CAREER_PATH_LIST');
export const setPublicClassroomList = createAction('app/SET_PUBLIC_CLASSROOM_LIST');
export const appendPublicClassroomList = createAction('app/APPEND_PUBLIC_CLASSROOM_LIST');
export const setSearchQueryPublicClassroom = createAction('app/SET_SEARCH_QUERY_PUBLIC_CLASSROOM');
export const setIsSearchingPublicClassroom = createAction('app/SET_IS_SEARCHING_PUBLIC_CLASSROOM');

export const setPublicCareerPathList = createAction('app/SET_PUBLIC_CAREER_PATH_LIST');
export const appendPublicCareerPathList = createAction('app/APPEND_PUBLIC_CAREER_PATH_LIST');

export const setScrollPosition = createAction('app/SET_SCROLL_POSITION');
export const clearScrollPosition = createAction('app/CLEAR_SCROLL_POSITION');
export const clearAppData = createAction('app/CLEAR_APP_DATA');

export const setContactInfo = createAction('app/SET_CONTACT_INFO');

export const actions = {
    showAppLoading,
    hideAppLoading,
    toggleActionLoading,
    changeLanguage,
    uploadFile,
    showAppCartModal,
    hideAppCartModal,
    showCollapse,
    hideCollapse,
    setRestaurantId,
    setClassroomList,
    appendClassroomList,
    setSearchQueryClassroom,
    setIsSearchingClassroom,
    setCareerPathList,
    appendCareerPathList,
    setRecommendedCareerPathList,
    appendRecommendedCareerPathList,
    setPublicClassroomList,
    appendPublicClassroomList,
    setSearchQueryPublicClassroom,
    setIsSearchingPublicClassroom,
    setPublicCareerPathList,
    appendPublicCareerPathList,
    setSubjectList,
    appendSubjectList,
    setSearchQuerySubject,
    setIsSearchingSubject,
    setScrollPosition,
    clearScrollPosition,
    clearAppData,
    setContactInfo,
};
